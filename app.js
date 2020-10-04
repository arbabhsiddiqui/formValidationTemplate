// add event listener

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("number").addEventListener("blur", validateNumber);

// validate name
function validateName() {
  const name = document.getElementById("name");
  const re = /^[A-Za-z]{2,25}\s[A-Za-z]{2,25}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

// validate email
function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

// validate zip
function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{6}$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

// validate number
function validateNumber() {
  const number = document.getElementById("number");
  const re = /^[6-9]([0-9]{9})$/;

  if (!re.test(number.value)) {
    number.classList.add("is-invalid");
  } else {
    number.classList.remove("is-invalid");
  }
}
