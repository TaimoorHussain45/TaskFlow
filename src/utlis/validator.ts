export const isEmpty = (value: string) => !value.trim();

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const isValidPassword = (password: string, minLength = 6) => {
  return password.trim().length >= minLength;
};

export const doPasswordsMatch = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
