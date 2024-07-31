import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import classes from './Publications.module.scss';
import { Publication } from '../Publication/Publication';
import { PublicationFormContainer } from '../PublicationForm/PublicationFormContainer';
import type { PublicationType } from '../../../../../utils/types/common';
import { scrollToBottom } from '../../../../../utils/helpers/componentsHelpers';

type PropsType = {
  title: string;
  buttonText: string;
  publications: PublicationType[];
  addPublication: (text: string) => void;
};

export const Publications: FC<PropsType> = ({ title, buttonText, publications, addPublication }): ReactElement => {
  const publicationsElements = publications.map(
    (publication: PublicationType): ReactElement => <Publication text={publication.text} key={publication.id} />
  );

  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollToBottom(anchorRef);
  }, [publications]);

  return (
    <div className={classes.publicationsBlock}>
      <h3 className={classes.title}>{title}</h3>
      <PublicationFormContainer buttonText={buttonText} addPublication={addPublication} />
      <div className={classes.publications} ref={anchorRef}>
        {publicationsElements}
      </div>
    </div>
  );
};
