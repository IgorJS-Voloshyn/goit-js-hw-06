const textInput = document.querySelector("#name-input");
const spanInput = document.querySelector("#name-output");

textInput.addEventListener('input', (event) => {
  if (textInput.value === "") {
    return (spanInput.textContent = "Anonymous");
  }

 return spanInput.textContent = event.currentTarget.value;
 
});
