import FooterAgent from "../../Components/FooterAgent/FooterAgent";
import Header from "../../Components/Header/Header";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent";
import RulesMain from "../../Components/RulesMain.jsx";
export default function Rules() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <RulesMain />
        <FooterAgent />
      </div>
    </div>
  );
}
