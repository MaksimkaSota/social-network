import type { FC, ReactElement } from 'react';
import classes from './SettingsPage.module.scss';

export const SettingsPage: FC = (): ReactElement => {
  return <div className={classes.settingsPageBlock}>Settings</div>;
};
