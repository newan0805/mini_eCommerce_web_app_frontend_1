import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import * as Yup from "yup";
import { login } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state);
  // console.log(error);

  const handleSubmit = (values) => {
    const { email, password } = values;
    dispatch(login({ email, password }));
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
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
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
