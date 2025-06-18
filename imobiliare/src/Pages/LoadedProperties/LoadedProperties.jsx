import LoadedPropertiesMain from "../../Components/LoadedPropertiesMain/LoadedPropertiesMain.jsx";
import Header from "../../Components/Header/Header";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent";
import FooterAgent from "../../Components/FooterAgent/FooterAgent";

export default function LoadedProperties() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <div className="center">
          <LoadedPropertiesMain />
        </div>
        <FooterAgent />
      </div>
    </div>
  );
}
