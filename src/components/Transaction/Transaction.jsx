import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.element_row}>
          <th className={css.element_thead}>Type</th>
          <th className={css.element_thead}>Amount</th>
          <th className={css.element_thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.table_data}>{transaction.type}</td>
            <td className={css.table_data}>{transaction.amount}</td>
            <td className={css.table_data}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
