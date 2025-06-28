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
  const [userDetails, setUserDetails] = useState({});
  const [unreadCounts, setUnreadCounts] = useState(0);

  const [messages, setMessages] = useState({});
  const clientRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || clientRef.current) return;

    fetch(`http://localhost:8080/api/conversations?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setConversations(data))
      .catch((err) => console.error("Eroare la conversații", err));

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
          const exists = prev.find((c) => c.id == fromId);
          if (exists) {
            return prev.map((c) =>
              c.id == fromId
                ? {
                    ...c,
                    lastMessage: message.content,
                    unreadCount:
                      fromId === activeChat ? 0 : (c.unreadCount || 0) + 1,
                  }
                : c
            );
          } else {
            return [
              ...prev,
              {
                id: fromId,
                name: `User ${fromId}`,
                lastMessage: message.content,
                unreadCount: 1,
              },
            ];
          }
        });

        setUnreadCounts((prev) => ({
          ...prev,
          [fromId]:
            fromId == activeChat || fromId == user.id
              ? 0
              : (prev[fromId] || 0) + 1,
        }));
      });
    });

    setStompClient(client);
    clientRef.current = client;
  }, [user, activeChat]);

  const sendMessage = (receiverId, content) => {
    const msg = { senderId: user.id, receiverId, content };
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
      const updated = prev.filter((c) => c.id !== receiverId);

      const newConversation = {
        id: receiverId,
        name: userDetails.firstname + " " + userDetails.lastname,
        lastMessage: content,
        unreadCount: 0,
        profilePicture: userDetails.profilePicture,
      };

      return [newConversation, ...updated];
    });
  };

  const openChatWith = async (otherId) => {
    setActiveChat(otherId);
    setUnreadCounts((prev) => ({ ...prev, [otherId]: 0 }));

    await fetch(`http://localhost:8080/api/users/${otherId}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data))
      .catch((err) => console.error("Eroare la fetch:", err));

    setConversations((prev) =>
      prev.map((c) => (c.id == otherId ? { ...c, unreadCount: 0 } : c))
    );

    if (!messages[otherId]) {
      try {
        const res = await fetch(
          `http://localhost:8080/api/messages?user1=${user.id}&user2=${otherId}`
        );
        if (res.ok) {
          const data = await res.json();
          setMessages((prev) => ({ ...prev, [otherId]: data }));
        }
      } catch (err) {
        console.error("Eroare fetch mesaje", err);
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeChat,
        messages,
        sendMessage,
        openChatWith,
        setActiveChat,
        userDetails,
        unreadCounts,
        setUnreadCounts,
        user,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
