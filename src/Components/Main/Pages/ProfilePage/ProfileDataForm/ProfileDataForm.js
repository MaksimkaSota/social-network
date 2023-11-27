import { Form } from 'formik';
import classes from './ProfileDataForm.module.scss';
import { useState } from 'react';
import { FormField } from '../../../../Common/FormField/FormField';
import { Button } from '../../../../Common/Button/Button';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { ContactsForm } from '../ContactsForm/ContactsForm';

export const ProfileDataForm = ({data, isSubmitting, status, handleChange, setFieldValue}) => {
  const [editModeSkills, setEditModeSkills] = useState(data.lookingForAJob);

  const onToggleEditModeSkills = (event) => {
    setFieldValue('lookingForAJob', event.target.checked);
    setEditModeSkills(event.target.checked);
  };

  return (
    <Form className={classes.dataFormBlock}>
      <div className={classes.updateButtonBlock}>
        <Button text="Save" type="submit" className={classes.button} disabled={isSubmitting} />
      </div>
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>Full name:</b>
        <FormField classNameField={classes.field}
                   name="fullName"
                   type="text"
                   placeholder="Full name"
                   onChange={handleChange} />
      </div>
      {
        (status && status['fullName']) &&
        <FormServerError name="fullName" status={status} className={classes.error} />
      }
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>Looking for a job:</b>
        <FormField classNameLabel={classes.label}
                   name="lookingForAJob"
                   type="checkbox"
                   props={{id: 'rememberMe'}}
                   text="looking for a job"
                   onChange={onToggleEditModeSkills} />
      </div>
      {
        editModeSkills &&
        <div className={classes.descriptionBlock}>
          <b className={classes.title}>My professional skills:</b>
          <FormField classNameField={classes.textarea}
                     name="lookingForAJobDescription"
                     component="textarea"
                     placeholder="My professional skills"
                     onChange={handleChange} />
        </div>
      }
      {
        (status && status['Job']) &&
        <FormServerError name="Job" status={status} className={classes.error} />
      }
      <div className={classes.descriptionBlock}>
        <b className={classes.title}>About me:</b>
        <FormField classNameField={classes.textarea}
                   name="aboutMe"
                   component="textarea"
                   placeholder="About me"
                   onChange={handleChange} />
      </div>
      {
        (status && status['aboutMe']) &&
        <FormServerError name="aboutMe" status={status} className={classes.error} />
      }
      <ContactsForm data={data} status={status} handleChange={handleChange} />
    </Form>
  );
};
