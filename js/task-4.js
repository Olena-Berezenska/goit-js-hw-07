const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const passwd = event.target.elements.password.value;
  if (email === '' || passwd === '') {
    return console.log(`All form fields must be filled in`);
  }
  const formResult = {
    email: email.trim(),
    password: passwd.trim(),
  };
  console.log(formResult);
  event.target.reset();
}
