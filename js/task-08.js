const form = document.querySelector('.login-form');

const formSubmitHeandler = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password
    };

     email === "" || password === ""
    ? alert("Заповніть всі поля!")
    : console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener('submit', formSubmitHeandler);    


