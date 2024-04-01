import {
  TableBody,
  TableHead,
  TableHeadText,
  TransactionHistoryTable,
} from './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TransactionHistoryTable>
        <TableHead>
          <tr>
            <TableHeadText>Type</TableHeadText>
            <th className="TableHeadText">Amount</th>
            <th className="TableHeadText">Currency</th>
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
