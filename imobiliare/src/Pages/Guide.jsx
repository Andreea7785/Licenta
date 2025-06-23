import FooterAgent from "../Components/FooterAgent/FooterAgent";
import GuideMain from "../Components/GuideMain/GuideMain";
import Header from "../Components/Header/Header";
import SidebarAgent from "../Components/SidebarAgent/SidebarAgent";

export default function Guide() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <GuideMain />
        <FooterAgent />
      </div>
    </div>
  );
}
