import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


function Formm() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Resets the form after submission
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>React Hook Form with Controller</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name Field */}
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: "First Name is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Last Name Field */}
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: "Last Name is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/*mobile number */}
        <Controller
          name="mobile"
          control={control}
          defaultValue={""}
          rules={{
            required: "Mobile Number",
            pattern: {
              value: /^[0-9]/,
              message: "invalid character",
            },
            maxLength: {
              value: 10,
              message: "Enter as Indian standard (10 digits)",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Mobile Number"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/*Radio Functionality */}
        <Controller
          name="gender"
          control={control}
          defaultValue={""}
          rules={{
            required: "Must Select one!",
          }}
          render={({ field }) => (
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={field.value}
                onChange={field.onChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="prefer not"
                  control={<Radio />}
                  label="Prefer Not To Say"
                />
              </RadioGroup>
            </FormControl>
          )}
        />

        {/* Checkbox functinality */}
        <Controller
          name="terms"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <FormControlLabel
              required
              control={<Checkbox {...field} />}
              label="Terms and Conditions"
              margin="normal"
            />
          )}
        />

        {/*Star rating*/}
        <Controller
          name="Rating"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <>
              <Typography component="legend">Rate Form Quality</Typography>
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                {...field}
              />
            </>
          )}
        />

        {/*Stakeholder type*/}
        <Controller
          name="Stakeholder"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Stakeholder Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  {...field}
                  label="Age"
                >
                  <MenuItem value={"Intern"}>Intern</MenuItem>
                  <MenuItem value={"Employee"}>Employee</MenuItem>
                  <MenuItem value={"Core Member"}>Core Member</MenuItem>
                </Select>
              </FormControl>
            </>
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
      </form>
    </div>
  );
}

export default Formm;
