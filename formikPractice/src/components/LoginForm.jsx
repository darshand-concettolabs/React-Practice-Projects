import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

const LoginForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("* Name is required")
      .min(3, "Name must be at least 3 character"),
    email: yup.string().required("* Email is required").email("Invalid format"),
    password: yup
      .string()
      .required("* Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("* Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    gender: yup.string().required("Please select gender"),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={defaultValues}
      >
        <Form className="form">
          <label className="fonts" htmlFor="name">
            Name:
          </label>
          <Field type="text" className="input" name="name"></Field>
          <p className="error-message">
            <ErrorMessage name="name"></ErrorMessage>
          </p>
          <br />

          <label className="fonts" htmlFor="email">
            Email:
          </label>
          <Field type="text" className="input" name="email"></Field>
          <p className="error-message">
            <ErrorMessage name="email"></ErrorMessage>
          </p>
          <br />

          <label className="fonts" htmlFor="password">
            Password:
          </label>
          <Field type="password" className="input" name="password"></Field>
          <p className="error-message">
            <ErrorMessage name="password"></ErrorMessage>
          </p>
          <br />

          <label className="fonts" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <Field
            type="password"
            className="input"
            name="confirmPassword"
          ></Field>
          <p className="error-message">
            <ErrorMessage name="confirmPassword"></ErrorMessage>
          </p>
          <br />

          <label className="fonts" htmlFor="gender">
            Gender:
          </label>
          <Field
            component="select"
            className="input"
            name="gender"
            placeholder="Gender"
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <p className="error-message">
            <ErrorMessage name="gender"></ErrorMessage>
          </p>
          <br />

          <button className="btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
