import { Status } from './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className="item">
        <Status online={isOnline} />
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};
