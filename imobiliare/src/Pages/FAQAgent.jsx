import FAQAgentMain from "../Components/FAQAgentMain/FAQAgentMain";
import FooterAgent from "../Components/FooterAgent/FooterAgent";
import Header from "../Components/Header/Header";
import SidebarAgent from "../Components/SidebarAgent/SidebarAgent";

export default function FAQAgent() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <FAQAgentMain />
        <FooterAgent />
      </div>
    </div>
  );
}
