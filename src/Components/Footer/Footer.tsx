import type { FC, ReactElement } from 'react';
import classes from './Footer.module.scss';
import email from '../../assets/images/email.png';
import { ViewFormContainer } from '../Common/ViewForm/ViewFormContainer';

type PropsType = {
  languageMode: string;
  themeMode: string;
  setLanguageMode: (languageMode: string) => void;
  setThemeMode: (themeMode: string) => void;
};

export const Footer: FC<PropsType> = ({ languageMode, themeMode, setLanguageMode, setThemeMode }): ReactElement => {
  return (
    <footer className={classes.footer}>
      <div className={classes.mailContainer}>
        <img className={classes.mail} src={email} alt="mail" />
      </div>
      <div className={classes.contactsContainer}>
        <h2 className={classes.title}>Contacts:</h2>
        <div className={classes.contacts}>
          <a
            className={classes.contact}
            href="https://github.com/MaksimkaSota"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={classes.contact}
            href="https://linkedin.com/in/maksimkasota"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className={classes.contact} href="mailto:MaksimkaSota@gmail.com">
            MaksimkaSota@gmail.com
          </a>
        </div>
      </div>
      <ViewFormContainer
        languageMode={languageMode}
        themeMode={themeMode}
        setLanguageMode={setLanguageMode}
        setThemeMode={setThemeMode}
      />
    </footer>
  );
};
