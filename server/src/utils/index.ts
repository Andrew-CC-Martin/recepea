/**
 * Not an exhaustive email validation regex, but it's good enough for our purposes.
 */
export const validateEmail = (email: string): boolean =>
  /\S+@\S+\.\S+/.test(email);

export const validatePassword = (password: string): boolean => {
  if (!password) {
    return false;
  }

  if (password.length < 8) {
    return false;
  }
  // needs to contain at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // needs to have uppercase
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // needs to have lowercase
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // needs to have special character
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return false;
  }

  return true;
};
