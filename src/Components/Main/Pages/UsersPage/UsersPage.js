import classes from './UsersPage.module.scss';
import { User } from './User/User';

export const UsersPage = ({users, follow, unfollow, setUsers}) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        userPhotoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        followed: true,
        name: 'Max',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        userPhotoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        followed: true,
        name: 'Eugene',
        status: 'I am a boss, too',
        location: {city: 'Warsaw', country: 'Poland'}
      },
      {
        id: 3,
        userPhotoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        followed: false,
        name: 'Yuri',
        status: 'I am a boss, too',
        location: {city: 'Kiev', country: 'Ukraine'}
      }
    ]);
  }

  return (
    <div className={classes.usersPageBlock}>
      {users.map((user) => <User key={user.id}
                                 user={user}
                                 follow={follow}
                                 unfollow={unfollow} />
      )}
    </div>
  );
};
