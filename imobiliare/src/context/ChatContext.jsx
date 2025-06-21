import "../Components/ChatUser/sock-fix";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [stompClient, setStompClient] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [unreadCounts, setUnreadCounts] = useState({});

  const clientRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || clientRef.current) return;

    const socket = new SockJS("http://localhost:8080/chat-websocket");
    const client = over(socket);
    client.connect({ userId: user.id }, () => {
      client.subscribe("/user/queue/messages", (msg) => {
        const message = JSON.parse(msg.body);
        const fromId = message.senderId;

        setMessages((prev) => ({
          ...prev,
          [fromId]: [...(prev[fromId] || []), message],
        }));

        setConversations((prev) => {
          const exists = prev.find((c) => c.id === fromId);
          if (exists) {
            return prev.map((c) =>
              c.id === fromId ? { ...c, lastMessage: message.content } : c
            );
          } else {
            return [
              ...prev,
              {
                id: fromId,
                name: `User ${fromId}`,
                lastMessage: message.content,
              },
            ];
          }
        });

        if (fromId !== activeChat) {
          setUnreadCounts((prev) => ({
            ...prev,
            [fromId]: (prev[fromId] || 0) + 1,
          }));
        }
      });
    });
    setStompClient(client);
    clientRef.current = client;
  }, [user, activeChat]);

  const sendMessage = (receiverId, content) => {
    const msg = {
      senderId: user.id,
      receiverId,
      content,
    };
    stompClient.send(
      `/app/chat.private.${receiverId}`,
      {},
      JSON.stringify(msg)
    );
    setMessages((prev) => ({
      ...prev,
      [receiverId]: [...(prev[receiverId] || []), msg],
    }));

    setConversations((prev) => {
      const exists = prev.find((c) => c.id === receiverId);
      if (exists) {
        return prev.map((c) =>
          c.id === receiverId ? { ...c, lastMessage: content } : c
        );
      } else {
        return [
          ...prev,
          { id: receiverId, name: `User ${receiverId}`, lastMessage: content },
        ];
      }
    });
  };

  const openChatWith = async (userId) => {
    setActiveChat(userId);
    setUnreadCounts((prev) => ({ ...prev, [userId]: 0 }));

    if (!messages[userId]) {
      try {
        const res = await fetch(
          `http://localhost:8080/api/messages?user1=${user.id}&user2=${userId}`
        );
        if (res.ok) {
          const data = await res.json();
          setMessages((prev) => ({ ...prev, [userId]: data }));
        }
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeChat,
        messages,
        unreadCounts,
        sendMessage,
        openChatWith,
        setActiveChat,
        user,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
