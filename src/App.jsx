import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from './components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transaction/Transaction';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transaction/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
