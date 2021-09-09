import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table className={s.table}>
            <thead className={s.theat}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(el => (
                    <tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>
                ))}                
            </tbody>
        </table>)
}
TransactionHistory.propTypes = {
    items: PropTypes.array
};
export default TransactionHistory;