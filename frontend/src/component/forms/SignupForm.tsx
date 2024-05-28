import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .trim("Name must be  at least 5 characters long")
    .required("Name must be  at least 5 characters long"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  email: Yup.string().email("Invalid Email").required("Invalid Email"),
  password: Yup.string()
    .trim("Password must be  at least 6 characters long")
    .required("Password must be  at least 6 characters long"),
  password_2: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords Must Match")
    .required("Passwords Must Match"),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        dob: "",
        email: "",
        password: "",
        password_2: "",
      }}
      validationSchema={signupSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className="mt-4 font-body w-full space-y-4">
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              className="bg-secondary w-full p-3 focus:outline-none"
            />
            {errors.name && touched.name ? (
              <div className="text-xs text-red-600 ">{errors.name}</div>
            ) : null}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="dob">Date of Birth</label>
            <Field
              type="date"
              name="dob"
              id="dob"
              className="bg-secondary w-full p-3 focus:outline-none"
            />
            {errors.dob && touched.dob ? (
              <div className="text-xs text-red-600 capitalize">
                {errors.dob}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="bg-secondary w-full p-3 focus:outline-none"
            />
            {errors.email && touched.email ? (
              <div className="text-xs text-red-600 capitalize">
                {errors.email}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="bg-secondary w-full p-3 focus:outline-none"
            />
            {errors.password && touched.password ? (
              <div className="text-xs text-red-600 capitalize">
                {errors.password}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="password_2">Confirm Password</label>
            <Field
              type="password"
              name="password_2"
              id="password_2"
              className="bg-secondary w-full p-3 focus:outline-none"
            />
            {errors.password_2 && touched.password_2 ? (
              <div className="text-xs text-red-600 capitalize">
                {errors.password_2}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-3 cursor-pointer"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
