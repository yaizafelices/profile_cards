"use strict";

const linkCard = document.querySelector(".js_link-card");

const warning = document.querySelector(".js_warning");

const btnTwitter = document.querySelector(".js_shareTwitterBtn");

function handleCreateCard(ev) {
  ev.preventDefault();
  console.log(data);
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResp) => {
      console.log(serverResp);

      if (serverResp.success) {
        linkCard.innerHTML = serverResp.cardURL;
        linkCard.href = serverResp.cardURL;
        shareTwitter.classList.remove("collapsed");
        shareBtn.classList.add("clicked");
        warning.innerHTML = "";
        warning.innerHTML = "";

        btnTwitter.href = `https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20profesional&url=${serverResp.cardURL}`;

        localStorage.setItem(
          "cardStoraged",
          JSON.stringify(serverResp.cardURL)
        );
      } else {
        warning.innerHTML = "Deben estar rellenos todos los campos";
      }
    });
}

shareBtn.addEventListener("click", handleCreateCard);
