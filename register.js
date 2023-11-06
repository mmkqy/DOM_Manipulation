const registerPage = document.createElement("section");
registerPage.id = "register";
registerPage.style.display = "none";
let users = [
  {
    firstname: "Meky",
    lastname: "Quirante",
    email: "mekyquirante@gmail.com",
    password: "password",
    
},
 
];

const registrationForm = () => {
  const firstname = document.createElement("input");
  const lastname = document.createElement("input");
  const email = document.createElement("input");
  const password = document.createElement("input");
  const confirmPassword = document.createElement("input");
  const submitButton = document.createElement("input");
  const form = document.createElement("form");

  const labelEmail = document.createElement("label");
  const labelFirstname = document.createElement("label");
  const labelLastname = document.createElement("label");
  const labelPassword = document.createElement("label");
  const labelConfirmPassword = document.createElement("label");
  
  labelFirstname.innerText = "Firstname: ";
  labelFirstname.setAttribute("for", "Email");
  labelLastname.innerText = "Lastname:";
  labelLastname.setAttribute("for", "lastname");
  labelEmail.innerText = "Email:";
  labelPassword.innerText = "Password:";
  labelConfirmPassword.innerText = "Confirm Password:";
  labelConfirmPassword.setAttribute("for", "confirmPassword");
  form.method = "POST";

  firstname.type = "text";
  firstname.name = "firstname";
  lastname.type = "text";
  lastname.name = "lastname";
  email.type = "email";
  email.name = "email";
  password.type = "password";
  password.name = "password";
  confirmPassword.type = "password";
  confirmPassword.name = "confirm_password";
  submitButton.type = "submit";
  submitButton.value = "submit"

  form.appendChild(labelFirstname);
  form.appendChild(firstname);
  form.appendChild(labelLastname);
  form.appendChild(lastname);
  form.appendChild(labelEmail);
  form.appendChild(email);
  form.appendChild(labelPassword);
  form.appendChild(password);
  form.appendChild(labelConfirmPassword);
  form.appendChild(confirmPassword);
  form.appendChild(submitButton);
  
  
  return {form, confirmPassword};
  
 };
 
  const {form, confirmPassword} = registrationForm();
  
form.addEventListener("submit", (e) => {
      e.preventDefault();    
      const email = document.querySelector("[name='email']");
      const firstname = document.querySelector("[name='firstname']");
      const lastname = document.querySelector("[name='lastname']");
      const password = document.querySelector("[name='password']");
    
    const validateUser = (user) => {   
      if (!email.value || !firstname.value || !lastname.value || !password.value || !confirmPassword.value){
          alert("Please fill in all fields");
          return false;
      }
     
      if (password.value !== confirmPassword.value){
          alert("Passwords doesn't match!");
          return false;
      }
      
          return true;
    };
    
    if (validateUser()) {
      let newUser = {
          email: email.value,
          firstname: firstname.value,
          lastname: lastname.value,
          password: password.value,
          
      };
      users.push(newUser);
           
      console.log(newUser);
      alert("Registration Successfully");
    } 
    
   });

registerPage.appendChild(form);

const validateUser = (user) => {};

const registerUser = (user) => {};

export { users, registrationForm, registerPage, validateUser, registerUser };
