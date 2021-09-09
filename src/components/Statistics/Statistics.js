import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ stats }) => {
    return (
        <section>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.list}>
                {stats.map(el =>
                    <li
                        key={el.id}
                        className={s.item}>
                        <span className={s.stat}>{el.label}</span>
                        <span>{el.percentage}</span>
                    </li>
                )}                
            </ul>
        </section>)
}
Statistics.propTypes = {
    stats: PropTypes.array
};
export default Statistics;