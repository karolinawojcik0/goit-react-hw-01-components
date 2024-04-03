import { Item, Status } from './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item>
        <Status $isOnline={isOnline} />
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Item>
    </>
  );
};
