import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface CsvData {
  [key: string]: string;
}

interface CsvToTableProps {
  csvFilePath: string;
}

const CsvToTable: React.FC<CsvToTableProps> = ({ csvFilePath }) => {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const [header, setHeader] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFilePath);
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);

      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          setCsvData(results.data as CsvData[]);
          if (results.data.length > 0) {
             setHeader(Object.keys(results.data[0] as object));
          }
        },
      });
    };

    fetchData();
  }, [csvFilePath]);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
      <tr>
        {header.map((column, index) => (
        <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
          {column}
        </th>
        ))}
      </tr>
      </thead>
      <tbody>
      {csvData.map((row, index) => (
        <tr key={index}>
        {header.map((column, columnIndex) => (
          <td key={columnIndex} style={{ border: '1px solid black', padding: '8px' }}>
          {row[column]}
          </td>
        ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default CsvToTable;