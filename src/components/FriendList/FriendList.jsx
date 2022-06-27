import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendslistItem';

export default function FriendList ({ friends = 'you are alone, sorry' }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem 
        avatar = {avatar}
        name={name}
        isOnline={isOnline}
        id={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
