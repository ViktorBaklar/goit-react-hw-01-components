import './App.css';
import Profile from './components/profile';
import User from './user.json';


const App = () => {
  return <div className="react-components">
    <h2>Task-1. User profile</h2>
    <Profile
      name={User.name}
      location={User.location}
      tag={User.tag}
      avatar={User.avatar}
      stats={User.stats}
    />
  </div>
}

export default App;
