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

function Login() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <Controller
            name="Username"
            control={control}
            defaultValue={""}
            rules={{ required: "Username is mandatory!!" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={!!error}
                helperText={error ? error.message : ""}
              />
            )}
          />

          <Controller
            name="Password"
            control={control}
            defaultValue={""}
            rules={{ required: "Password is Required!!" }}
            render={({ field, fieldState: { error } }) => (
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                required
                error={!!error}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...field} // this will include value and onChange automatically
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
                  label="Password"
                  error={!!error}
                />
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
    </div>
  );
}

export default Login;
