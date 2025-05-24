import "./TellUs.css";
import MainTellUs from "../../Components/MainTellUs/MainTellUs";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

export default function TellUs() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <div className="center">
          <MainTellUs />
        </div>
        <Footer />
      </div>
    </div>
  );
}
