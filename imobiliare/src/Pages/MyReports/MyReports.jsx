import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import axios from "axios";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA46BE",
  "#FF4D4D",
  "#8884D8",
  "#4CAF50",
  "#D81B60",
];

const MONTHS = [
  "", // indexare de la 1
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

  const agentId = JSON.parse(localStorage.getItem("user")).id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/transactions/reports?agentId=${agentId}`)
      .then((res) => {
        const report = res.data;

        const chartPriceData = report.priceComparisons.map((item) => ({
          name: item.propertyTitle,
          Listed: parseFloat(item.listedPrice),
          Sold: item.soldPrice,
        }));

        const chartTypeData = Object.entries(report.soldPropertyTypes).map(
          ([type, count]) => ({ name: type, value: count })
        );

        const chartMonthlyStats = report.monthlyStats.map((item) => ({
          month: MONTHS[item.month],
          appointments: item.appointments,
          transactions: item.transactions,
        }));

        setPriceData(chartPriceData);
        setTypeData(chartTypeData);
        setMonthlyStats(chartMonthlyStats);
      })
      .catch((err) => console.error("Error fetching report:", err));
  }, [agentId]);

  return (
    <div className="charts-container">
      <h2>Diferențe de preț între listare și vânzare</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={priceData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Listed" fill="#cdb4db" />
          <Bar dataKey="Sold" fill="#ffc8dd" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Tipuri de proprietăți vândute</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={typeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {typeData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>

      <h2>Programări și tranzacții în ultimele 12 luni</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyStats}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="appointments" fill="#8ecae6" name="Programări" />
          <Bar dataKey="transactions" fill="#ffb703" name="Tranzacții" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyReports;
