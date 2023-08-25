import classes from './Main.module.scss';
import { Navigation } from './Navigation/Navigation';
import { Profile } from './Profile/Profile';

export const Main = () => {
  return (
    <main className={classes.main}>
      <Navigation />
      <Profile />
    </main>
  );
};
