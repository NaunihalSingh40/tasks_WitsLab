import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from 'react-redux'
import { Wrapper } from "../styles/components/Login/Login";
import { darkTheme, lightTheme } from "../theme/color";

function Login() {

  const theme = useSelector((state) => state.theme.value);

  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  React.useEffect(() => {
    document.title = "Login Page";
  }, []);

  const onSubmit = (data) => {
    const key = "loginCredentials:";

    // Store data as a string in localStorage
    localStorage.setItem(key, JSON.stringify(data));  // Storing the credentials as a string

    // Retrieve the data
    const token = localStorage.getItem(key);
    if (token) {
      console.log("Token saved over local Storage:", token);  // Log the saved token (JSON string)
    } else {
      console.log("No token found in localStorage");
    }
    reset(); // Resets the form after submission
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper $isDarkMode={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <Controller
            name="Username"
            control={control}
            defaultValue={""}
            rules={{ required: "Username is mandatory!!" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.Username}  // Display error if field is invalid
                helperText={errors.Username ? errors.Username.message : ""}  // Display error message
                sx={{
                  input: {
                    color: theme ? darkTheme.textPrimary : lightTheme.textPrimary,
                  },
                  label: {
                    color: theme ? darkTheme.textPrimary : lightTheme.textPrimary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: theme ? darkTheme.border : lightTheme.border,
                    },
                    "&:hover fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                }}
              />
            )}
          />

          <Controller
            name="Password"
            control={control}
            defaultValue={""}
            rules={{ required: "Password is Required!!" }}
            render={({ field }) => (
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.Password}  // Display error if field is invalid
                sx={{
                  input: {
                    color: theme ? darkTheme.textPrimary : lightTheme.textPrimary,
                  },
                  label: {
                    color: theme ? darkTheme.textPrimary : lightTheme.textPrimary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: theme ? darkTheme.border : lightTheme.border,
                    },
                    "&:hover fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors.Password}  // Display error if field is invalid
                  sx={{
                    input: {
                      color: theme ? darkTheme.textPrimary : lightTheme.textPrimary,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme ? darkTheme.border : lightTheme.border,
                      },
                      "&:hover fieldset": {
                        borderColor: theme ? darkTheme.accent : lightTheme.accent,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme ? darkTheme.accent : lightTheme.accent,
                      },
                    },
                  }}
                />
                {/* Display the error message for the Password field */}
                {errors.Password && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {errors.Password.message}
                  </span>
                )}
              </FormControl>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Login;
