import "./PropertyPage.css";
import PropertyMain from "../../Components/PropertyMain/PropertyMain";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

export default function PropertyPage() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <div className="center">
          <PropertyMain />
        </div>
        <Footer />
      </div>
    </div>
  );
}
