import './App.css';
import Profile from './components/profile';
import user from './user.json';
import Statistic from './components/statistic';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList';
import friends from './friends.json'


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
    <Statistic title="Upload stats" stats={statisticalData} />
    <h2>Task-3. Friendslist</h2>
    <FriendList friends={friends} />
  </div>
}

export default App;
