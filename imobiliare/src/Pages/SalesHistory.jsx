import FooterAgent from "../Components/FooterAgent/FooterAgent";
import Header from "../Components/Header/Header";
import SalesHistoryMain from "../Components/SalesHistoryMain/SalesHistoryMain";
import SidebarAgent from "../Components/SidebarAgent/SidebarAgent";

export default function SalesHistory() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <SalesHistoryMain />
        <FooterAgent />
      </div>
    </div>
  );
}
