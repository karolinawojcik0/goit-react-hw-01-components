import { TableBody, TableHead, TransactionHistoryTable } from "./TransactionHistory.css";

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TransactionHistoryTable>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </TableBody>
      </TransactionHistoryTable>
    </>
  );
};
