import { Form } from 'formik';
import { ChangeEvent, FC, ReactElement, useState } from 'react';
import cn from 'classnames';
import classes from './ProfileDataForm.module.scss';
import { FormField } from '../../../../Common/FormField/FormField';
import { Button } from '../../../../Common/Button/Button';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { FormikErrorsType, FormName, HandleChangeType, SetFieldValueType } from '../../../../../utils/types/form';
import { IRequestProfile } from '../../../../../api/types/profile';

type PropsType = {
  data: IRequestProfile;
  isSubmitting: boolean;
  status: any;
  handleChange: HandleChangeType;
  setFieldValue: SetFieldValueType;
  errors: FormikErrorsType;
};

export const ProfileDataForm: FC<PropsType> = ({
  data,
  isSubmitting,
  status,
  handleChange,
  setFieldValue,
  errors,
}): ReactElement => {
  const [editModeSkills, setEditModeSkills] = useState<boolean>(data.lookingForAJob);

  const onToggleEditModeSkills = (event: ChangeEvent<any>): void => {
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
          classNameField={cn(classes.field, { [classes.fieldError]: status?.fullName })}
          name={FormName.full_name}
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          errors={errors}
        />
      </div>
      {status?.fullName && <FormServerError name={FormName.full_name} status={status} className={classes.error} />}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>Looking for a job:</h5>
        <FormField
          classNameField={classes.checkbox}
          classNameLabel={classes.label}
          name={FormName.looking_for_a_job}
          type="checkbox"
          props={{ id: 'rememberMe' }}
          text="looking for a job"
          onChange={onToggleEditModeSkills}
        />
      </div>
      {editModeSkills && (
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>My professional skills:</h5>
          <FormField
            classNameField={cn(classes.textarea, { [classes.fieldError]: status?.Job })}
            name={FormName.looking_for_a_job_description}
            component="textarea"
            placeholder="My professional skills"
            onChange={handleChange}
          />
        </div>
      )}
      {status?.Job && <FormServerError name={FormName.job} status={status} className={classes.error} />}
      <div className={classes.descriptionBlock}>
        <h5 className={classes.title}>About me:</h5>
        <FormField
          classNameField={cn(classes.textarea, { [classes.fieldError]: status?.aboutMe })}
          name={FormName.about_me}
          component="textarea"
          placeholder="About me"
          onChange={handleChange}
        />
      </div>
      {status?.aboutMe && <FormServerError name={FormName.about_me} status={status} className={classes.error} />}
      <ContactsForm data={data} status={status} handleChange={handleChange} />
    </Form>
  );
};
