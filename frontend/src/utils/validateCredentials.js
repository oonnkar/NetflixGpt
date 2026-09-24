const validateCredentials = (email, password) => {
  const validationErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  if (!email) {
    validationErrors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    validationErrors.email = "Enter a valid email address.";
  }

  if (!password) {
    validationErrors.password = "Password is required.";
  } else if (!passwordRegex.test(password)) {
    validationErrors.password =
      "Password must be at least 6 characters and include a number.";
  }

  return validationErrors;
};

export default validateCredentials;
