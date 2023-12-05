import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span className={css.status}>
            {friend.isOnline ? (
              <p className={css.online}>Online</p>
            ) : (
              <p className={css.offline}>Offline</p>
            )}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
