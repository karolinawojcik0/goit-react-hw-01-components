import {
  Location,
  ProfileCard,
  ProfileImage,
  ProfileTag,
  Username,
  Stats,
  Label,
  Quantity,
  Separator,
  LastSeparator,
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
          <Separator>
            <Label>Followers </Label>
            <Quantity>{stats.followers}</Quantity>
          </Separator>
          <Separator>
            <Label>Views </Label>
            <Quantity>{stats.views}</Quantity>
          </Separator>
          <LastSeparator>
            <Label>Likes </Label>
            <Quantity>{stats.likes}</Quantity>
          </LastSeparator>
        </Stats>
      </ProfileCard>
    </>
  );
};
