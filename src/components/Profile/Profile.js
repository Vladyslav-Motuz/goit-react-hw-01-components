import PropTypes from 'prop-types';
import s from './Profile.module.css';
const Profile = (props) => {
    const { name, tag, location, avatar, stats } = props;
    return (
        <div className={s.card}>
            <div className="tumb">
                <img
                    className="img"
                    src={avatar}
                    alt="Аватар пользователя"
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.loca}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.stat}>Followers</span>
                    <span className={s.statData}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.stat}>Views</span>
                    <span className={s.statData}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.stat}>Likes</span>
                    <span className={s.statData}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};
export default Profile;