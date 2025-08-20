import React, { useState } from "react";
import "../signup&signin/signUp.css";
import Input from "../../components/Input/CustomInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(20, "maximum 20 characters")
      .required("username is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "At least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Must contain at least one special character (e.g. @, $, !)"
      )
      .required("Password is required"),
  });

  return (
    <>
      <div className="signup flex items-center justify-center min-h-screen pt-20">
        <div className=" rounded-2xl shadow-2xl w-[500px] h-[500px] flex flex-col justify-center p-10">
          <h1 className="font-semibold text-3xl md:text-5xl text-center text-white mb-8">
            Sign Up
          </h1>
          <p className="text-white mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            aliquid? Exercitationem veritatis soluta voluptatum
          </p>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values,errors) => {
              console.log(values);
              console.log(errors)
            }}
          >
            {({ errors, touched, values, handleChange, isSubmitting }) => (
              <Form>
                <div className="space-y-6 md:space-y-8 mb-8">
                  <Input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={values.username}
                    onChange={handleChange}
                    required
                    className="text-white placeholder-stone-400 border border-stone-300"
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-800 text-sm">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    className="text-white placeholder-stone-400 border border-stone-300"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-800 text-sm">{errors.email}</div>
                  )}
                </div>

                <div className="mb-8">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    className="text-white placeholder-stone-400 border border-stone-300"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-800 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    name="submit"
                    // onChange={isSubmitting}
                    className="w-full rounded-sm bg-violet-200 py-2 hover:bg-violet-400 active:bg-violet-800 "
                  >
                    Continue →
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="align-center md:text-white text-left my-5">
            Already have an account? {""}
            <Link
              to="/login"
              className="font-semibold text-gray-900 hover:text-violet-400 my-5"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
