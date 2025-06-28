import React, { useRef } from "react";
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
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";
import "./CompanyTargetChart.css";

const CompanyTargetChart = ({ data, target }) => {
  const chartRef = useRef();

  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Target firmă");

    worksheet.columns = [
      { header: "Lună", key: "month", width: 20 },
      { header: "Vânzări totale (EUR)", key: "totalSales", width: 25 },
    ];

    data.forEach((row) => {
      worksheet.addRow({
        month: row.month,
        totalSales: row.totalSales,
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

    worksheet.getColumn("totalSales").numFmt = '#,##0" €"';

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "target_firma.xlsx");
  };

  const downloadImage = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "target_firma.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <>
      <div className="company-target-chart" ref={chartRef}>
        <h2 className="company-target-title">
          🎯 Îndeplinirea targetului la nivel de firmă
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 50, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis dataKey="month" />
            <YAxis
              domain={[0, 600000]}
              allowDataOverflow={false}
              tickFormatter={(val) => `${val.toLocaleString()} €`}
            />

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

export default CompanyTargetChart;
