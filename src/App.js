import './App.css';
import Profile from './components/profile';
import user from './user.json';
import Statistic from './components/statistic';
import statisticalData from './statistical-data.json'


const App = () => {
  return <div className="react-components">
    <h2>Task-1. User profile</h2>
    <Profile
      name={user.name}
      location={user.location}
      tag={user.tag}
      avatar={user.avatar}
      stats={user.stats}
    />
    <h2>Task-2. Statistical data</h2>
    <Statistic />
  </div>
}

export default App;
