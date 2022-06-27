import css from '../FriendList/FriendList.module.css';

export default function FriendListItem ({avatar, name, isOnline, id}) {
    return (<li className={css.item} key={id}>
    <span className={isOnline ? css.status : css.statusOff}>
      {isOnline}
    </span>

    <img
      className={css.avatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.name}>{name}</p>
  </li>)
}