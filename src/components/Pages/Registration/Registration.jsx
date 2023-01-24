import { ErrorMessage, Field, Form, Formik } from "formik";
import { createSigninAndSigninFormValidationSchema } from "./validator";


const initialValues = {
  email: "",
  group: "",
  password: "",
};

export const Registration = () => {
  const submitHandler = (values) => {
    console.log({values})
    }
  

 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createSigninAndSigninFormValidationSchema}
      onSubmit={submitHandler}
    >
      
      <Form className="d-flex flex-column ">
        <h1>Регистрация</h1>

        
        <label htmlFor='email'>email</label>
        <Field name="email" id='email' placeholder="email here" type="email" />
        <ErrorMessage component="p" className="error" name="email" />

        <label htmlFor='group'>группа</label>
        <Field name="group" id='group' placeholder="sm9" type="text" />
        <ErrorMessage component="p" className="error" name="group" />

        
        <label htmlFor='password'>пароль</label>
        <Field name="password" id='password' type="text" placeholder="password here" />
        <ErrorMessage component="p" className="error" name="password" />

        <button className="mt-4 " type="submit">Регистрация</button>
      </Form>
      
    </Formik>
  );
};
