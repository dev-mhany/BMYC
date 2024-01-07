// import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
// import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
// import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userSignInAction } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./login.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);
  useEffect(() => {
    if (userInfo && userInfo.role === 1) {
      navigate("/admin/dashboard");
    } else if (userInfo) {
      navigate("/user/dashboard");
    }
  }, [isAuthenticated, navigate, userInfo]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //  alert(JSON.stringify(values, null, 2));
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Hello, Friend!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Register with your personal details to use all of site features
            </Typography>
            <Button variant="contained" color="secondary">
              SIGN UP
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box style={{ maxWidth: 400, margin: "auto" }}>
              <Box display="flex" justifyContent="center" mb={2}>
                <IconButton color="primary">
                  <GoogleIcon />
                </IconButton>
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Typography variant="subtitle1" align="center">
                or use your email password
              </Typography>
              <form noValidate autoComplete="off">
                <TextField fullWidth id="email" label="Email" margin="normal" />
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <Typography align="right" variant="body2">
                  Forgot Your Password?
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 16 }}
                >
                  SIGN IN
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default LogIn;
