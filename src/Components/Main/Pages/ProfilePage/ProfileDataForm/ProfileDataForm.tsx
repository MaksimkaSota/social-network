import type { ChangeEvent, FC, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Form } from 'formik';
import cn from 'classnames';
import classes from './ProfileDataForm.module.scss';
import { FormField } from '../../../../Common/FormField/FormField';
import { Button } from '../../../../Common/Button/Button';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import type {
  FormikErrorsType,
  HandleChangeType,
  SetFieldValueType,
  SetStatusType,
  ValidateFormType,
} from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { FormName } from '../../../../../utils/types/enums';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  data: IRequestProfile;
  isSubmitting: boolean;
  status: any;
  setStatus: SetStatusType;
  handleChange: HandleChangeType;
  setFieldValue: SetFieldValueType;
  errors: FormikErrorsType;
  languageMode: string;
  validateForm: ValidateFormType;
};

export const ProfileDataForm: FC<PropsType> = ({
  data,
  isSubmitting,
  status,
  setStatus,
  handleChange,
  setFieldValue,
  errors,
  languageMode,
  validateForm,
}): ReactElement => {
  const [editModeSkills, setEditModeSkills] = useState<boolean>(data.lookingForAJob);

  const onToggleEditModeSkills = (event: ChangeEvent<any>): void => {
    setFieldValue(FormName.looking_for_a_job, event.target.checked);
    setEditModeSkills(event.target.checked);
  };

  useEffect(() => {
    setStatus();
    validateForm();
    // eslint-disable-next-line
  }, [languageMode]);

  return (
    <Form className={classes.dataFormBlock}>
      <div className={classes.innerDataFormBlock}>
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>{contentText.name[languageMode]}:</h5>
          <FormField
            classNameFormField={classes.formField}
            classNameField={cn(classes.field, { [classes.fieldError]: status?.fullName })}
            name={FormName.full_name}
            type="text"
            placeholder={contentText.name[languageMode]}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        {status?.fullName && <FormServerError name={FormName.full_name} status={status} className={classes.error} />}
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>{contentText.job[languageMode]}:</h5>
          <FormField
            classNameField={classes.checkbox}
            classNameLabel={classes.label}
            name={FormName.looking_for_a_job}
            type="checkbox"
            id="rememberMe"
            text={contentText.job[languageMode]}
            onChange={onToggleEditModeSkills}
          />
        </div>
        {editModeSkills && (
          <div className={classes.descriptionBlock}>
            <h5 className={classes.title}>{contentText.jobDescription[languageMode]}:</h5>
            <FormField
              classNameField={cn(classes.textarea, { [classes.fieldError]: status?.Job })}
              name={FormName.looking_for_a_job_description}
              component="textarea"
              placeholder={contentText.jobDescription[languageMode]}
              onChange={handleChange}
            />
          </div>
        )}
        {status?.Job && <FormServerError name={FormName.job} status={status} className={classes.error} />}
        <div className={classes.descriptionBlock}>
          <h5 className={classes.title}>{contentText.me[languageMode]}:</h5>
          <FormField
            classNameField={cn(classes.textarea, { [classes.fieldError]: status?.aboutMe })}
            name={FormName.about_me}
            component="textarea"
            placeholder={contentText.me[languageMode]}
            onChange={handleChange}
          />
        </div>
        {status?.aboutMe && <FormServerError name={FormName.about_me} status={status} className={classes.error} />}
        <ContactsForm data={data} status={status} handleChange={handleChange} languageMode={languageMode} />
      </div>
      <Button
        text={contentText.saveDataBtn[languageMode]}
        type="submit"
        className={classes.button}
        disabled={isSubmitting}
      />
    </Form>
  );
};
