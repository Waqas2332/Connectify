import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

type SigninFormProps = {
  onOpen: () => void;
};

const siginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Invalid Email"),
  password: Yup.string()
    .min(6, "Password must be off 6 characters")
    .required("Password must be off 6 characters"),
});

const SigninForm = ({ onOpen }: SigninFormProps) => {
  return (
    <>
      <div className="w-full login-form">
        <h2 className="font-heading text-3xl font-semibold">Sign in</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={siginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-4 font-body w-full space-y-4">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-secondary w-full p-3 focus:outline-none"
                />
                {errors.email && touched.email ? (
                  <div className="text-xs text-red-600 ">{errors.email}</div>
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
              <button
                type="submit"
                className="w-full bg-primary py-3 cursor-pointer"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 cursor-pointer text-primary text-center">
          Forget Password?
        </p>
        <p onClick={onOpen} className="mt-12 cursor-pointer text-center">
          Don't have an account?{" "}
          <span className="text-primary italic">Sign up</span> Now
        </p>
      </div>
    </>
  );
};

export default SigninForm;
