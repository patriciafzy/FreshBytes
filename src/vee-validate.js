// This file contains rules for form validation
import {
  required,
  confirmed,
  email,
  alpha_spaces,
  min,
  max,
} from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required!",
});

extend("email", {
  ...email,
  message: "Email must be in a valid format!",
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords must match!",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Name must be made of letters only.",
});

extend("max", {
  ...max,
  message: "Name cannot exceed 40 characters!",
});

extend("password_min", {
  ...min,
  message: "Password must be at least 8 characters!",
});

extend("positive", (value) => {
  if (value >= 0) {
    return true;
  }

  return "Value must be positive!";
});

extend("greater_than_0", (value) => {
  if (value > 0) {
    return true;
  }

  return "Value must be greater than 0!";
});
