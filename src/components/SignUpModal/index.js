import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CustomTextField } from './styles';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};

const SignUpModal = ({ open, onClose }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" align="center" gutterBottom sx={{fontWeight:'bold'}}>
          Sign in to MovieStreamer
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="body2" sx={{ mt: 2 }}>Username</Typography>
          <CustomTextField
            fullWidth
            placeholder="Username"
            margin="dense"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
            variant="outlined"
          />
          
          <Typography variant="body2" sx={{ mt: 2 }}>Email</Typography>
          <CustomTextField
            fullWidth
            placeholder="Email"
            margin="dense"
            sx={{ bgcolor: "#f7f7f7" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            variant="outlined"
          />
          
          <Typography variant="body2" sx={{ mt: 2 }}>Number</Typography>
          <CustomTextField
            fullWidth
            placeholder="Number"
            margin="dense"
            sx={{ bgcolor: "#f7f7f7" }}
            {...register("number", {
              required: "Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid number"
              }
            })}
            error={!!errors.number}
            helperText={errors.number ? errors.number.message : ""}
            variant="outlined"
          />

          <Typography variant="body2" sx={{ mt: 2 }}>Password</Typography>
          <CustomTextField
            fullWidth
            type="password"
            placeholder="Password"
            margin="dense"
            sx={{ bgcolor: "#f7f7f7" }}
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum length is 6" } })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            variant="outlined"
          />

          <Typography variant="body2" sx={{ mt: 2 }}>Confirm Password</Typography>
          <CustomTextField
            fullWidth
            type="password"
            placeholder="Confirm Password"
            margin="dense"
            sx={{ bgcolor: "#f7f7f7" }}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
            variant="outlined"
          />

          <Button type="submit" variant="contained" color="#333" sx={{ mt: 2, bgcolor: "grey.300", width: "100px", display: "block", mx: "auto", textTransform:'none' }}>
            Sign In
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
