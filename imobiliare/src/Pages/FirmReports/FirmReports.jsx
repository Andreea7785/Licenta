import React, { useEffect, useState } from "react";

import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent.jsx";
import Header from "../../Components/Header/Header.jsx";
import TopAgentsChart from "../../Components/TopAgentsChart/TopAgentsChart.jsx";
import CompanyTargetChart from "../../Components/CompanyTargetChart/CompanyTargetChart";
import FooterAgent from "../../Components/FooterAgent/FooterAgent.jsx";
import axios from "axios";
import PropertyTypePieChart from "../../Components/PropertyTypePieChart/PropertyTypePieChart.jsx";

// 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
const FirmReports = () => {
  const [data, setData] = useState(null);
  const target = 50000;

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
          <CompanyTargetChart data={data.monthlySales} target={target} />
          <PropertyTypePieChart
            data={data.propertyTypeSales}
            title="Valoare per tip de proprietate"
          />
        </div>

        <FooterAgent />
      </div>
    </div>
  );
};

export default FirmReports;
