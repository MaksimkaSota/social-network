import { type ChangeEvent, type FC, type ReactElement, useEffect, useRef, useState } from 'react';
import classes from './InputFile.module.scss';
import { Button } from '../Button/Button';
import { contentText } from '../../../utils/languageLocalization/contentText';

type PropsType = {
  actionFile: (photo: File) => void;
  languageMode: string;
};

export const InputFile: FC<PropsType> = ({ actionFile, languageMode }): ReactElement => {
  const [fileInfo, setFileInfo] = useState<string>(contentText.file[languageMode]);
  const inputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFileInfo(contentText.file[languageMode]);
  }, [languageMode]);

  const onChangeInputFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files?.length) {
      setFileInfo(event.target.files[0].name);
      actionFile(event.target.files[0]);
    } else {
      setFileInfo(contentText.file[languageMode]);
    }
  };

  const autoClick = (): void => {
    inputFile.current?.click();
  };

  return (
    <div className={classes.inputFileBlock}>
      <Button text={contentText.fileBtn[languageMode]} onClick={autoClick} className={classes.button} />
      <input className={classes.inputFile} type="file" ref={inputFile} id="inputFile" onChange={onChangeInputFile} />
      <label className={classes.labelInputFile} htmlFor="inputFile">
        {fileInfo}
      </label>
    </div>
  );
};
