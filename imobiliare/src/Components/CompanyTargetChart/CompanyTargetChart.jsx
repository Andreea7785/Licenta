import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ReferenceLine,
} from "recharts";

const CompanyTargetChart = ({ data, target }) => {
  return (
    <div className="chart-section">
      <h4 style={{ textAlign: "center" }}>
        Îndeplinirea targetului la nivel de firmă
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
  );
};

export default CompanyTargetChart;
