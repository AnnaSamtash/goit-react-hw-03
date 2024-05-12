import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Must be a valid number ххх-хх-хх!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }}
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
          <ErrorMessage
            className={css.form_error}
            name="name"
            component="span"
          />
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
          <ErrorMessage
            className={css.form_error}
            name="number"
            component="span"
          />
        </div>

        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
