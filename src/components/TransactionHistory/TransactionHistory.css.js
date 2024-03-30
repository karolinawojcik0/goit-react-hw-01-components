import styled from "styled-components";

export const TransactionHistoryTable = styled.table`

  width: 500px;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  th, td {
    border-right: 1px solid #eaeaea;
    padding: 10px;
    text-align: left;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }
`;

export const TableHead = styled.thead`
color: #d9dcd6;
background-color: #16425b; 
color: white; 
padding: 10px; 
text-align: left;`
    ;

export const TableBody = styled.tbody`
  background-color: #f7f7f7;
  color: #333;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  }
`;
