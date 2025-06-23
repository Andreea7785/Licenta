import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import FooterAgent from "../../Components/FooterAgent/FooterAgent";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent";

import { PersonalInformations } from "../../Components/PersonalInformations/PersonalInformations";

export const AccountInformationsPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const SidebarComponent = role === "agent" ? SidebarAgent : Sidebar;
  const FooterComponent = role === "agent" ? FooterAgent : Footer;

  return (
    <div className="layout">
      <SidebarComponent />
      <div className="content-area">
        <Header />
        <PersonalInformations user={user} showDocuments={true} />
        <FooterComponent />
      </div>
    </div>
  );
};
