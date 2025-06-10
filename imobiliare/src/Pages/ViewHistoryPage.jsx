import Header from "../Components/Header/Header";
import ViewHistory from "../Components/ViewHistoryMain/ViewHistoryMain";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import ViewHistoryMain from "../Components/ViewHistoryMain/ViewHistoryMain";

const ViewHistoryPage = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <ViewHistoryMain />
        <Footer />
      </div>
    </div>
  );
};

export default ViewHistoryPage;
