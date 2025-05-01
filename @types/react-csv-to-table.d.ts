declare module 'react-csv-to-table' {
    
    import React from 'react';
  
    interface CsvToHtmlTableProps {
      data: string;
      csvDelimiter?: string;
      tableClassName?: string;
      tableStyle?: React.CSSProperties;
      tableHeaderRowStyle?: React.CSSProperties;
      tableBodyRowStyle?: React.CSSProperties;
      tableBodyCellStyle?: React.CSSProperties;
    }
  
    export class CsvToHtmlTable extends React.Component<CsvToHtmlTableProps> {}
  }