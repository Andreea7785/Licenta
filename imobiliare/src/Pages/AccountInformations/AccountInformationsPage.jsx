import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { PersonalInformations } from "../../Components/PersonalInformations/PersonalInformations";

export const AccountInformationsPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <PersonalInformations user={user} showDocuments={true} />
        <Footer />
      </div>
    </div>
  );
};
