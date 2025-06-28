import React, { useEffect, useState } from "react";
import "./FirmReports.css";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent.jsx";
import Header from "../../Components/Header/Header.jsx";
import TopAgentsChart from "../../Components/TopAgentsChart/TopAgentsChart.jsx";
import CompanyTargetChart from "../../Components/CompanyTargetChart/CompanyTargetChart";
import FooterAgent from "../../Components/FooterAgent/FooterAgent.jsx";
import axios from "axios";
import PropertyTypePieChart from "../../Components/PropertyTypePieChart/PropertyTypePieChart.jsx";

const FirmReports = () => {
  const [data, setData] = useState(null);
  const target = 250000;

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transactions/firm")
      .then((res) => {
        const response = {
          ...res.data,
          propertyTypeSales: [
            ...res.data.propertyTypeSales.map((item) => ({
              name: item.type,
              value: item.totalSales,
            })),
          ],
        };
        setData(response);
        response;
      })
      .catch((err) => console.error("Eroare la preluare date:", err));
  }, []);

  if (!data) return <p>Se încarcă...</p>;
  data;

  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <div className="title">
          <h2>Rapoarte la nivel de firmă</h2>
        </div>

        <div className="charts-container">
          <TopAgentsChart data={data.topAgentCommissions} />
          <br></br>
          <CompanyTargetChart data={data.monthlySales} target={target} />
          <br></br>
          <PropertyTypePieChart
            data={data.propertyTypeSales}
            title="Distribuția valorii vânzărilor pe tipuri de proprietăți"
          />
        </div>

        <FooterAgent />
      </div>
    </div>
  );
};

export default FirmReports;
