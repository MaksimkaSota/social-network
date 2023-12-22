import { Form } from 'formik';
import classes from './ProfileDataForm.module.scss';
import { useState } from 'react';
import { FormField } from '../../../../Common/FormField/FormField';
import { Button } from '../../../../Common/Button/Button';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import cn from 'classnames';

export const ProfileDataForm = ({data, isSubmitting, status, handleChange, setFieldValue, errors}) => {
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
        <h5 className={classes.title}>Full name:</h5>
        <FormField
          classNameField={cn(classes.field, {[classes.fieldError]: status?.fullName})}
          name="fullName"
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          errors={errors}
        />
      </div>
      {status?.fullName && <FormServerError name="fullName" status={status} className={classes.error} />}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Looking for a job:</h5>
        <FormField
          classNameField={classes.checkbox}
          classNameLabel={classes.label}
          name="lookingForAJob"
          type="checkbox"
          props={{id: 'rememberMe'}}
          text="looking for a job"
          onChange={onToggleEditModeSkills}
        />
      </div>
      {
        editModeSkills &&
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>My professional skills:</h5>
          <FormField
            classNameField={cn(classes.textarea, {[classes.fieldError]: status?.Job})}
            name="lookingForAJobDescription"
            component="textarea"
            placeholder="My professional skills"
            onChange={handleChange}
          />
        </div>
      }
      {status?.Job && <FormServerError name="Job" status={status} className={classes.error} />}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>About me:</h5>
        <FormField
          classNameField={cn(classes.textarea, {[classes.fieldError]: status?.aboutMe})}
          name="aboutMe"
          component="textarea"
          placeholder="About me"
          onChange={handleChange}
        />
      </div>
      {status?.aboutMe && <FormServerError name="aboutMe" status={status} className={classes.error} />}
      <ContactsForm data={data} status={status} handleChange={handleChange} />
    </Form>
  );
};
