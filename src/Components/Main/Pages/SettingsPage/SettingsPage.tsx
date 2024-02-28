import classes from './SettingsPage.module.scss';
import { FC, ReactElement } from 'react';

export const SettingsPage: FC = (): ReactElement => {
  return <div className={classes.settingsPageBlock}>Settings</div>;
};
