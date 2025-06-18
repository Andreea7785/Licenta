import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
} from "recharts";
import axios from "axios";
import PropertyTypePieChart from "../../Components/PropertyTypePieChart/PropertyTypePieChart";

export const FirmReports = () => {
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
        console.log(response);
      })
      .catch((err) => console.error("Eroare la preluare date:", err));
  }, []);

  if (!data) return <p>Se încarcă...</p>;
  console.log(data);
  return (
    <div style={{ background: "#f6f0e8", padding: 20, borderRadius: 12 }}>
      <h2 style={{ fontWeight: "bold" }}>Rapoarte la nivel de firmă</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ textAlign: "center" }}>Top 3 agenti</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.topAgentCommissions}>
              <XAxis dataKey="agent" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#339999" name="Venituri (EUR)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: 1 }}>
          <h4 style={{ textAlign: "center" }}>
            Îndeplinirea targetului la nivel de firmă
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlySales}>
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(val) => `${val} €`} />
              <Tooltip formatter={(val) => `${val} €`} />
              <Legend />
              <ReferenceLine
                y={target}
                label="Target"
                stroke="red"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="totalSales"
                stroke="#0077cc"
                name="Vânzări reale"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <PropertyTypePieChart
        data={data.propertyTypeSales}
        title="Valoare per tip de proprietate"
      />
    </div>
  );
};
