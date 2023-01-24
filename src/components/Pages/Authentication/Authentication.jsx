import { ErrorMessage, Field, Form, Formik } from "formik";
import { createSigninAndSigninFormValidationSchema } from "../Registration/validator";

const initialValues = {
  email: '',
  password: '',
}


export const Authentication = () => {
const submitHandler = (values) => {
console.log({values})
}

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={createSigninAndSigninFormValidationSchema}
    onSubmit={submitHandler}
  >
    <Form className="d-flex flex-column">
      <h1>Войти</h1>
      <label htmlFor='email'>email</label>
      <Field name="email" id='email' placeholder="email here" type="email" />
      <ErrorMessage component="p" className="error" name="email" />

      <label htmlFor='password'>пароль</label>
      <Field name="password" id='password' type="text" placeholder="password here" />
      <ErrorMessage component="p" className="error" name="password" />

      <button className="mt-4" type="submit">Войти</button>
    </Form>
  </Formik>
    )
};
