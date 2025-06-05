import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { AvailablePropMain } from "../../Components/AvailablePropMain/AvailablePropMain";

export const AvailableProperties = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <AvailablePropMain />
        <Footer />
      </div>
    </div>
  );
};
