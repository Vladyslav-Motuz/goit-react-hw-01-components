import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';
const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(friend =>
                <li key={friend.id} className={s.item}>
                    <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}/></li>
                )
            }
        </ul>)
}
FriendList.propTypes = {
    friends: PropTypes.array
};
export default FriendList;