const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputBlur);


const refs = {
    type :"text",
    id :"validation-input",
    length :"6",
    placeholder:"Please enter 6 symbols",  
};

function onInputBlur(event) {
  if (Number(refs.length) === event.currentTarget.value.length) {
    textInput.classList = "valid";
  } else {
    textInput.classList = "invalid";
  }
}