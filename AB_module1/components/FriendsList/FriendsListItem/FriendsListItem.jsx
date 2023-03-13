import PropTypes from 'prop-types';
import {Container, Avatar, Name, Status} from 'components/FriendsList/FriendsListItem/FriendsListItem.styled';

export const FriendsListItem = ({avatar, name, isOnline}) => {
  return (
    <Container>
      <Status isOnline={isOnline}/>
      <Avatar src={avatar} alt='User avatar' />
      <Name>{name}</Name>
    </Container>
  )
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};