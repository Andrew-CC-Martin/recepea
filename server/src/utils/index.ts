/**
 * Not an exhaustive email validation regex, but it's good enough for our purposes.
 */
export const validateEmail = (email: string): boolean =>
  /\S+@\S+\.\S+/.test(email);
