import Header from "../../Components/Header/Header";
import FooterAgent from "../../Components/FooterAgent/FooterAgent";

import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent";
import { AgentAppointmentsMain } from "../../Components/AgentAppointmentMain/AgentAppointmentMain";

export const AgentAppointments = () => {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <AgentAppointmentsMain />
        <FooterAgent />
      </div>
    </div>
  );
};
