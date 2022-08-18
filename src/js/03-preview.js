"use strict";

const allInputs = document.querySelector(".js_allInputs");

const data = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

const allButtons = document.querySelectorAll(".js_previewBtn");

allButtons.forEach((item) => item.removeAttribute("href"));

const handleInput = (ev) => {
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  const id = document.getElementById(nameInput);
  data[nameInput] = valueInput;
  if (nameInput === "name" || nameInput === "job") {
    id.innerHTML = valueInput;
  } else if (nameInput === "linkedin" || nameInput === "github") {
    id.href = valueInput;
  } else if (nameInput === "email") {
    id.href = `mailto: ${valueInput}`;
  } else if (nameInput === "phone") {
    id.href = `tel: ${valueInput}`;
  } else if (valueInput === "") {
    id.href.disabled = true;
  }
};

allInputs.addEventListener("keyup", handleInput);
