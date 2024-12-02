import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/authSlice";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { name, email, password } = values;

    dispatch(register({ name, email, password }));
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                type="text"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                type="email"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignUp;
