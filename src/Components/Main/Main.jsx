import classes from './Main.module.scss';
import { Navigation } from './Navigation/Navigation';
import { MainRoutes } from './MainRoutes';

export const Main = () => {
  return (
    <main className={classes.main}>
      <Navigation />
      <div className={classes.content}>
        <MainRoutes />
      </div>
    </main>
  );
};
