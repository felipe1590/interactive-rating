const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

let btnAtivo = 0;

btn1.addEventListener("click", () => {
  btnAtivo = 1;

  rating(btnAtivo);
});

btn2.addEventListener("click", () => {
  btnAtivo = 2;

  rating(btnAtivo);
});

btn3.addEventListener("click", () => {
  btnAtivo = 3;

  rating(btnAtivo);
});

btn4.addEventListener("click", () => {
  btnAtivo = 4;

  rating(btnAtivo);
});

btn5.addEventListener("click", () => {
  btnAtivo = 5;

  rating(btnAtivo);
});

function noRating() {
  btn1.classList.remove("select");
  btn2.classList.remove("select");
  btn3.classList.remove("select");
  btn4.classList.remove("select");
  btn5.classList.remove("select");
}

function rating(btnSelect) {
  noRating();

  if (btnSelect == 1) {
    btn1.classList.add("select");
  } else if (btnSelect == 2) {
    btn2.classList.add("select");
  } else if (btnSelect == 3) {
    btn3.classList.add("select");
  } else if (btnSelect == 4) {
    btn4.classList.add("select");
  } else if (btnSelect == 5) {
    btn5.classList.add("select");
  }
}

const page1 = document.querySelector("#initial-rating");
const page2 = document.querySelector("#final-rating");
const ratingFinal = document.querySelector("#rating");
const btnSubmit = document.querySelector("#enviar");

btnSubmit.addEventListener("click", () => {
  finalRating(btnAtivo);
});

function finalRating(rating) {
  if (rating !== 0) {
    page1.classList.add("displayOff");
    page2.classList.remove("displayOff");

    ratingFinal.textContent = `You selected ${btnAtivo} out of 5`;
  }
}
