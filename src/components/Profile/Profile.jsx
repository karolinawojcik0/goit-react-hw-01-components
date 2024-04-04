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
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>

          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>

          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </Stats>
      </ProfileCard>
    </>
  );
};
