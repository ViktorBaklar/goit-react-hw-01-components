import './App.css';
import Profile from './components/profile';
import user from './user.json';
import Statistics from './components/statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/friendList';
import friends from './friends.json'
import TransactionHistory from './components/transactionHistory';
import transactions from './transactions.json';


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
    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />
    <h2>Task-3. Friendslist</h2>
    <FriendList friends={friends} />
    <h2>Task-4. Transactions</h2>
    <TransactionHistory items={transactions} />;
  </div>
}

export default App;
