import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendListSection } from './FriendList.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendListSection>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendListSection>
    </>
  );
};
