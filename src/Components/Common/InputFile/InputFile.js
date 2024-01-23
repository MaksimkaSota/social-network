import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import classes from './InputFile.module.scss';

export const InputFile = ({ actionFile }) => {
  const [fileInfo, setFileInfo] = useState('No file chosen');
  const inputFile = useRef(null);

  const onChangeInputFile = (event) => {
    if (event.target.files.length) {
      setFileInfo(event.target.files[0].name);
      actionFile(event.target.files[0]);
    } else {
      setFileInfo('No file chosen');
    }
  };

  const autoClick = () => {
    inputFile.current.click();
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
