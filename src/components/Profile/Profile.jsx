import { Location, ProfileCard, ProfileImage, ProfileTag, Username } from './Profile.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
    <ProfileCard>
    <ProfileImage
          src={avatar}
          alt="User avatar"
        />
        <Username>{username}</Username>
        <ProfileTag>{tag}</ProfileTag>
        <Location>{location}</Location>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    
    </ProfileCard >
  </>
  );
};


