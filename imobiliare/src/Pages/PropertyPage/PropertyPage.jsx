import PropertyMain from "../../Components/PropertyMain/PropertyMain";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent";
import Footer from "../../Components/Footer/Footer";
import FooterAgent from "../../Components/FooterAgent/FooterAgent";

export default function PropertyPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAgent = user?.role === "agent";

  return (
    <div className="layout">
      {isAgent ? <SidebarAgent /> : <Sidebar />}
      <div className="content-area">
        <Header />
        <div className="center">
          <PropertyMain />
        </div>
        {isAgent ? <FooterAgent /> : <Footer />}
      </div>
    </div>
  );
}
