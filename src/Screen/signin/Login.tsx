import "./login.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { login } from "../../services/Authentication";

const theme = createTheme();

export default function SignIn() {
  const [passwordError, SetPasswordError] = useState(null)
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  // Navigation
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());

    SetPasswordError(null)

    // console.log({
    //   email: user.email,
    //   password: user.password,
    // });
    if (user.email === '' || user.password === '') {
      if (user.email === '') {
        return setErrors({ email: 'Please Inter your Email' });
      }
      return setErrors({ password: 'Please Inter your Password' });
    } else {
      setIsLoading(true);
      await login({
        email: user.email,
        password: user.password,
        userType: 2
      }).then((res) => {
        if (res.success === true) {
          localStorage.setItem("ReservationAccessToken", JSON.stringify(res.data?.accessToken));
          navigate("/dashboard");
          setIsLoading(false)
        }
      }).catch(error => {
        setIsLoading(false)
        // console.log(error, error.response?.data?.error.message);
        setErrors({ message: error.response?.data?.error.message });
        // console.log(error.response.data)
      })
    }
  };

  return (
    <div className="login-page">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(70,149,82)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {errors?.email && <p className='input-error'>**{errors.email}</p>}
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                error={Boolean(passwordError)}
              />
              {errors?.password && <p className='input-error'>**{errors?.password}</p>}
              {errors.message && <p className='input-error'>**{errors.message}</p>}
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{
                      color: "rgb(70,149,82)",
                      "&.Mui-checked": {
                        color: "rgb(70,149,82)",
                      },
                    }}
                  />
                }
                label="Remember me"
              />
              <ColorButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? <RestartAltIcon className="loading" /> : 'Sign in'}
              </ColorButton>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: "rgb(70,149,82)",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/signup"
                    variant="body2"
                    sx={{
                      color: "rgb(70,149,82)",
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <div>
            <div className="social-login">
              <hr />
              OR
              <hr />
            </div>
            <div className="social-media">
              <div className="fb-icon">
                <FacebookIcon />
              </div>
              <div className="g-icon">
                <GoogleIcon />
              </div>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(70,149,82)",
  },
  "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
    color: "red",
    fontSize: "8px"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(70,149,82)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(70,149,82)",
    },
    "&:hover fieldset": {
      borderColor: "#14A098",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(70,149,82)",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(70,149,82)"),
  backgroundColor: "rgb(70,149,82)",
  "&:hover": {
    backgroundColor: "#CB2D6F",
  },
}));
