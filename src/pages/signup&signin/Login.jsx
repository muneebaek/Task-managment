
import "../signup&signin/login.css";
import Input from "../../components/Input/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export const Login = () => {
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <div className="login flex items-center justify-center min-h-screen">
        <div className="p-10 rounded-2xl shadow-2xl w-[400px] h-[400px] flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center mb-5 text-white text-shadow-lg shadow-black">
            CUSTOMER LOGIN
          </h1>
          <Formik
            initialValues={{
              username: "",
              password: "",
              remember: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => { 
              if (
                values.username === "admin" &&
                values.password === "qwER12@"
              ) {
                alert("✅ Successfully Logged In!");
                navigate("/home")
              } else {
                alert("❌ Invalid username or password!");
              }
            }}
          >
            {({
              errors,
              touched,
              values,
              handleChange,
              handleLogin,
            }) => (
              <Form>
                <div className="my-8">
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

                <div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    className="text-white placeholder-stone-400 border border-stone-300 "
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-800 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 my-5  text-stone-100">
                  <div className="row remember">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={values.remember}
                      onChange={handleChange}
                    />
                    <label>Remember me</label>
                  </div>

                  <div className="row forgot ">
                    <a
                      href="#"
                      id="forgotLink"
                      className="underline hover:text-gray-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onSubmit={handleLogin}
                    className="w-full rounded-sm bg-violet-200 py-2 hover:bg-violet-400 active:bg-violet-800 mt-5"
                  >
                    <Link to = "/home">Login</Link>
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-gray-900 hover:text-violet-400 my-5"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
