import React, { useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import "./PropertyTypePieChart.css";

const COLORS = ["#a47148", "#bb8b64", "#9b8b7f"];
const PropertyTypePieChart = ({ data, title }) => {
  const chartRef = useRef();
  console.log(data);

  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Tipuri Proprietăți");

    worksheet.columns = [
      { header: "Tip proprietate", key: "name", width: 30 },
      { header: "Număr vânzări", key: "value", width: 20 },
    ];
    data.forEach((row) => {
      worksheet.addRow({
        name: row.name,
        value: row.value,
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
    saveAs(blob, "tipuri_proprietati.xlsx");
  };

  const downloadImage = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "tipuri_proprietati.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <>
      <div className="property-type-chart" ref={chartRef}>
        <h2 className="property-type-title">🏘️ {title}</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="button-row-inside-card">
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

export default PropertyTypePieChart;
