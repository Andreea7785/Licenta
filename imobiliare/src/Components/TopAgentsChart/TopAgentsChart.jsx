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
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";
import "./TopAgentsChart.css";

const TopAgentsChart = ({ data }) => {
  const chartRef = useRef();

  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Top Agenți");

    worksheet.columns = [
      { header: "Agent", key: "agent", width: 30 },
      { header: "Venituri (EUR)", key: "total", width: 20 },
    ];

    data.forEach((row) => {
      worksheet.addRow({
        agent: row.agent,
        total: row.total,
      });
    });

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF0B3D91" },
      };
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
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
          fgColor: { argb: "FFF3F3F3" },
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

    worksheet.getColumn("total").numFmt = '#,##0" €"';

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "top_agenti.xlsx");
  };

  const downloadImage = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "top_agenti.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <>
      <div className="top-agents-chart" ref={chartRef}>
        <h2 className="top-agents-title">🏆 Top 3 agenți pe baza vânzărilor</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="agent" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#1E8E8E" name="Venituri (EUR)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="button-row-below-card">
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

export default TopAgentsChart;
