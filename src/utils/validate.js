export const checkValidation = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password);
  const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)
  //returns true or false

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isNameValid) return "Name is not Valid";

  return null;
}; 

// export const isEmailValid = (email) => {
//   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
// if (!isEmailValid) return "Email is not Valid";
// };
