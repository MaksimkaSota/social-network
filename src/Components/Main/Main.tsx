import classes from './Main.module.scss';
import { Navigation } from './Navigation/Navigation';
import { MainRoutes } from './MainRoutes';
import { FC, ReactElement } from 'react';

export const Main: FC = (): ReactElement => {
  return (
    <main className={classes.main}>
      <Navigation />
      <div className={classes.content}>
        <MainRoutes />
      </div>
    </main>
  );
};
