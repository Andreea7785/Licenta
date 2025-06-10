import SidebarAgent from "../Components/SidebarAgent/SidebarAgent.jsx";
import Header from "../Components/Header/Header.jsx";
import FooterAgent from "../Components/FooterAgent/FooterAgent.jsx";

export default function HomeAgent() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <FooterAgent />
      </div>
    </div>
  );
}
