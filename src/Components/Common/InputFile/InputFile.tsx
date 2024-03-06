import type { ChangeEvent, FC, ReactElement } from 'react';
import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import classes from './InputFile.module.scss';

type PropsType = {
  actionFile: (photo: File) => void;
};

export const InputFile: FC<PropsType> = ({ actionFile }): ReactElement => {
  const [fileInfo, setFileInfo] = useState<string>('No file chosen');
  const inputFile = useRef<HTMLInputElement>(null);

  const onChangeInputFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files?.length) {
      setFileInfo(event.target.files[0].name);
      actionFile(event.target.files[0]);
    } else {
      setFileInfo('No file chosen');
    }
  };

  const autoClick = (): void => {
    inputFile.current?.click();
  };

  return (
    <div className={classes.inputFileBlock}>
      <Button text="Choose file" onClick={autoClick} className={classes.button} />
      <input className={classes.inputFile} type="file" ref={inputFile} id="inputFile" onChange={onChangeInputFile} />
      <label className={classes.labelInputFile} htmlFor="inputFile">
        {fileInfo}
      </label>
    </div>
  );
};
