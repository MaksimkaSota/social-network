import type { FC, ReactElement } from 'react';
import classes from './Main.module.scss';
import { Navigation } from './Navigation/Navigation';
import { MainRoutes } from './MainRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { viewSelector } from '../../redux/selectors/selectors';

export const Main: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);
  return (
    <main className={classes[`main-${themeMode}`]}>
      <Navigation />
      <div className={classes.content}>
        <MainRoutes />
      </div>
    </main>
  );
};
