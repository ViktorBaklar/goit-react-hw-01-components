const Statistic = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(item => (
        <li className="item" key={item.id} style={{ backgroundColor: getRandomColor() }} /* color={getRandomColor()} */ >
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section >
);


const getRandomColor = () => {
  return "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
};

// const itemStyle = {
//   backgroundColor: getRandomColor(),
// }

export default Statistic;