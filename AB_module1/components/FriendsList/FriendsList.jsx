import PropTypes from 'prop-types';
import {Container} from 'components/FriendsList/FriendsList.styled';
import { FriendsListItem } from 'components/FriendsList/FriendsListItem/FriendsListItem';


export const FriendsList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          />
      ))}
    </Container>
  )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      }),
    ),
};
