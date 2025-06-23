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
import "./PriceComparisonChart.css";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const PriceComparisonChart = ({ data }) => {
  const chartRef = useRef();

  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Raport Prețuri");

    worksheet.columns = [
      { header: "Titlu", key: "name", width: 40 },
      { header: "Preț listat ", key: "listat", width: 20 },
      { header: "Preț vândut", key: "vandut", width: 20 },
    ];

    data.forEach((row) => {
      worksheet.addRow({
        name: row.name,
        listat: row.Listat,
        vandut: row.Vândut,
      });
    });

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "#08265a" },
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
          fgColor: { argb: "#08265a" },
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

    worksheet.getColumn("listat").numFmt = '#,##0" €"';
    worksheet.getColumn("vandut").numFmt = '#,##0" €"';

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "raport_preturi.xlsx");
  };

  const downloadImage = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "raport_preturi.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <>
      <div className="price-report" ref={chartRef}>
        <h2 className="price-report-title">
          📊 Diferențe de preț între listare și vânzare
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Listat" fill="#7f90a3" />
            <Bar dataKey="Vândut" fill="#324D6B" />
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

export default PriceComparisonChart;
