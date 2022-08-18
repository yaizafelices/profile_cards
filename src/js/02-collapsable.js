"use strict";

const inputList = document.querySelectorAll(".js_input");
const shareTwitter = document.querySelector(".js_shareTwitter");

const designCollapsable = document.querySelector('.js-design');
const fillCollapsable = document.querySelector('.js-fill');
const shareCollapsable = document.querySelector('.js-share');

designArrow.classList.add("rotate");

function handleClick(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.id;

  if (id === "design") {
    designFieldset.classList.toggle("collapsed");
    designArrow.classList.toggle("rotate");
    fillFieldset.classList.add("collapsed");
    fillArrow.classList.remove("rotate");
    shareFieldset.classList.add("collapsed");
    shareArrow.classList.remove("rotate");
    shareTwitter.classList.add("collapsed");
    shareBtn.classList.remove("clicked");
    warning.innerHTML = "";
  } else if (id === "fill") {
    fillFieldset.classList.toggle("collapsed");
    fillArrow.classList.toggle("rotate");
    designFieldset.classList.add("collapsed");
    designArrow.classList.remove("rotate");
    shareFieldset.classList.add("collapsed");
    shareArrow.classList.remove("rotate");
    shareTwitter.classList.add("collapsed");
    shareBtn.classList.remove("clicked");
    warning.innerHTML = "";
  } else if (id === "share") {
    shareFieldset.classList.toggle("collapsed");
    shareArrow.classList.toggle("rotate");
    if (shareTwitter.classList.contains("collapsed")) {
      shareTwitter.classList.add("collapsed");
    } else {
      shareTwitter.classList.toggle("collapsed");
      shareBtn.classList.toggle("clicked");
    }
    designFieldset.classList.add("collapsed");
    designArrow.classList.remove("rotate");
    fillFieldset.classList.add("collapsed");
    fillArrow.classList.remove("rotate");
  }
}

designCollapsable.addEventListener("click", handleClick);
fillCollapsable.addEventListener("click", handleClick);
shareCollapsable.addEventListener("click", handleClick);
