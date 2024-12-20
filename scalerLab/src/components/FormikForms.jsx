import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForms = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
      })}
      onSubmit={(values) => {
        console.log('Form data:', values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForms;
