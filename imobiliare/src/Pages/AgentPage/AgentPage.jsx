import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import AgentDetails from "../../Components/AgentDetails/AgentDetails.jsx";
import "./AgentPage.css";

export default function AgentPage() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <AgentDetails />
        <Footer />
      </div>
    </div>
  );
}
