import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup
    .object({
      firstName: yup.string().required("* First Name is required"),
      lastName: yup.string().required("* LastName is required"),
      gender: yup.string().required("* Gender is required"),
      email: yup
        .string()
        .email("Invalid Email address")
        .required("Email is required"),
      phone: yup
        .string()
        .typeError("That doesn't look like Phone number")
        .required("Phone No. is required")
        .min(10),
      password: yup.string().required("Password is required").min(7),
      confirmPassword: yup
        .string()
        .required("* Confirm password is required")
        .oneOf([yup.ref("password")], "Passwords must be match"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const genderOptions = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
    { text: "Other", value: "other" },
  ];

  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>React Hook Form</h3>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="group-field">{errors.firstName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" {...register("lastName")} />
        {errors.lastName && (
          <span className="group-field">{errors.lastName.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>

        <select type="text" className="form-control" {...register("gender")}>
          <option value="">Select Gender</option>

          {genderOptions.map((options, index) => (
            <option key={index} value={options.value}>
              {options.text}
            </option>
          ))}
        </select>
        {errors.gender && (
          <span className="group-field">{errors.gender.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className="form-control" {...register("email")} />
        {errors.email && (
          <span className="group-field">{errors.email.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control" {...register("phone")} />
        {errors.phone && (
          <span className="group-field">{errors.phone.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <span className="group-field">{errors.password.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="group-field">{errors.confirmPassword.message}</span>
        )}
      </div>
      <div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
