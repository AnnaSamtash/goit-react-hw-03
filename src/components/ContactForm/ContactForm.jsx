import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Must be a valid number ххх-хх-хх!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      //   id: Date.now(),
      //   name: values.name,
      //   number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.contact_form}>
        <div className={css.form_input_container}>
          <label className={css.form_input_title} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.form_input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.form_input_container}>
          <label className={css.form_input_title} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.form_input}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
