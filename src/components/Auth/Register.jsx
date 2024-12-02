import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      })}
      onSubmit={(values) => register(values.name, values.email, values.password)}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />
          <Field
            name="email"
            as={TextField}
            label="Email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />
          <Field
            name="password"
            as={TextField}
            type="password"
            label="Password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
