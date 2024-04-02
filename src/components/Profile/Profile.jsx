import {
  Location,
  ProfileCard,
  ProfileImage,
  ProfileTag,
  Username,
  Stats,
  Label,
  Quantity,
} from './Profile.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <ProfileCard>
        <ProfileImage src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <ProfileTag>@{tag}</ProfileTag>
        <Location>{location}</Location>

        <Stats>
          <li>
            <Label>Followers </Label>
            <Quantity>{stats.followers}</Quantity>
          </li>
          <li>
            <Label>Views </Label>
            <Quantity>{stats.views}</Quantity>
          </li>
          <li>
            <Label>Likes </Label>
            <Quantity>{stats.likes}</Quantity>
          </li>
        </Stats>
      </ProfileCard>
    </>
  );
};
