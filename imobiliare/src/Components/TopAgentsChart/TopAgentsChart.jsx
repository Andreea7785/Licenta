import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const TopAgentsChart = ({ data }) => {
  return (
    <div className="chart-section">
      <h4 style={{ textAlign: "center" }}>Top 3 agenți</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="agent" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#339999" name="Venituri (EUR)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopAgentsChart;
