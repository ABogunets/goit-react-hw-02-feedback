
import PropTypes from 'prop-types';
import { DescriptionWrapper, Avatar, Name, Tag, Location } from 'components/Profile/Description/Description.styled';


export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionWrapper>
        <Avatar src={avatar} alt='User avatar' />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
    </DescriptionWrapper>
  )
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}
