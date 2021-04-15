const FriendListItem = ({ avatar, name, isOnline }) => (
  < li className="item">
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendListItem;