import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceComparisonChart from "../../Components/PriceComparisionChart/PriceComparisonChart.jsx";
import PropertyTypePieChart from "../../Components/PropertyTypePieChart/PropertyTypePieChart.jsx";
import MonthlyStatsChart from "../../Components/MonthlyStatsChart/MonthlyStatsChart.jsx";
import FooterAgent from "../../Components/FooterAgent/FooterAgent.jsx";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent.jsx";
import "./MyReports.css";
import Header from "../../Components/Header/Header.jsx";

const MONTHS = [
  "",
  "Ian",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Iun",
  "Iul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MyReports = () => {
  const [priceData, setPriceData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const agentId = user ? user.id : null;
  "agentId:", agentId;

  useEffect(() => {
    if (!agentId) {
      console.warn("Nu este niciun agent conectat.");
      return;
    }

    axios
      .get(`http://localhost:8080/api/transactions/reports?agentId=${agentId}`)
      .then((res) => {
        const report = res.data;

        setPriceData(
          report.priceComparisons.map((item) => ({
            name: item.propertyTitle,
            Listat: parseFloat(item.listedPrice),
            Vândut: item.soldPrice,
          }))
        );

        setTypeData(
          Object.entries(report.soldPropertyTypes).map(([type, count]) => ({
            name: type,
            value: count,
          }))
        );

        setMonthlyStats(
          report.monthlyStats.map((item) => ({
            month: MONTHS[item.month],
            appointments: item.appointments,
            transactions: item.transactions,
          }))
        );
      })
      .catch((err) => console.error("Error fetching report:", err));
  }, [agentId]);

  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <div className="title">
          <h2>Rapoarte privind tranzacțiile mele</h2>
        </div>
        <div className="charts-container">
          <PriceComparisonChart data={priceData} />
          <PropertyTypePieChart
            data={typeData}
            title={"Tipuri de proprietăți vândute"}
          />
          <MonthlyStatsChart data={monthlyStats} />
        </div>
        <FooterAgent />
      </div>
    </div>
  );
};

export default MyReports;
