import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './formikForm';

/* 

import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...setFormData,[name]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!formData.username) {newErrors.username = 'Username is required';}
        if (!formData.email) {newErrors.email = 'Email is required';}
        if (formData.password) {newErrors.password = 'Password is required';}

        setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        console.log('Form submitted: ', formData);
    }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};

export default RegistrationForm;

value={username},
value={email},
value={password}

if(!username)
if(!email)
if(!password)

*/

const FormikForm = () => {
    return (
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false); 
              }, 400);
        }}
      >
        {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
      </Formik>
    );
  };
  
  export default FormikForm;