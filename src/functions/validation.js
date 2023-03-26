const validation = (values) => {
  const { firstname, lastname, gender, email, password, confirmpassword } =
    values;

//   console.log(firstname, lastname, gender, email, password, confirmpassword);
  if (password !== confirmpassword) {
    return false;
  }
  return true;

//   return toast.success("user sign up completed");
};

export default validation;
