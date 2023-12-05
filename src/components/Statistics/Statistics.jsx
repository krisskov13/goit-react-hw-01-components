import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statistics_list}>
        {stats.map(statistics => (
          <li key={statistics.id} className={css.item}>
            <span className={css.label}>{statistics.label}</span>
            <span className={css.percentage}>{statistics.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
