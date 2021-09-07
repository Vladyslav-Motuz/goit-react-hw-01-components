import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
const FriendListItem = (prop) => {
    const {avatar, name, isOnline} = prop;
    return (
        <>
            <span className={isOnline? 'status status-true': 'status status-false'}></span>
            <img src={avatar} alt={name} width="48" className={s.img}/>
            <p className={s.title}>{name}</p>
        </>
        // <li key={id}>
        //     <span>{isOnline}</span>
        //     <img src={avatar} alt={name} width="48" />
        //     <p>{name}</p>
        // </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    // id: PropTypes.number,
};
export default FriendListItem;
