import React, { useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import "./MonthlyStatsChart.css";

const MonthlyStatsChart = ({ data }) => {
  const chartRef = useRef();

  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Statistici Lunare");

    worksheet.columns = [
      { header: "Lună", key: "month", width: 15 },
      { header: "Număr programări", key: "appointments", width: 20 },
      { header: "Număr tranzacții", key: "transactions", width: 20 },
    ];

    data.forEach((row) => {
      worksheet.addRow({
        month: row.month,
        appointments: row.appointments,
        transactions: row.transactions,
      });
    });

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFEBDCCB" },
      };
      cell.font = { bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
    });

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      row.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFFDF6F0" },
        };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "statistici_lunare.xlsx");
  };

  const downloadImage = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "statistici_lunare.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <>
      <div className="monthly-stats-report" ref={chartRef}>
        <h2 className="monthly-stats-title">
          📈 Programări și tranzacții pe luni
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} interval={0} />

            <Tooltip />
            <Legend />
            <Bar
              dataKey="appointments"
              fill="rgb(108, 93, 77)"
              name="Programări"
            />
            <Bar dataKey="transactions" fill="	#aa9b82" name="Tranzacții" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="button-row-inside-card-month">
        <button className="download-btn" onClick={downloadExcel}>
          Descarcă Excel 📥
        </button>
        <button className="download-btn" onClick={downloadImage}>
          Descarcă imagine 🖼️
        </button>
      </div>
    </>
  );
};

export default MonthlyStatsChart;
