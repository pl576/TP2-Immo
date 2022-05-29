//
//
// fonction pour le hover des catégorie
//
//

function hover_a_in() {
  let a = document.getElementsByClassName("1");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_a_out() {
  let a = document.getElementsByClassName("1");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_b_in() {
  let a = document.getElementsByClassName("2");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_b_out() {
  let a = document.getElementsByClassName("2");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_c_in() {
  let a = document.getElementsByClassName("3");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_c_out() {
  let a = document.getElementsByClassName("3");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_d_in() {
  let a = document.getElementsByClassName("4");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_d_out() {
  let a = document.getElementsByClassName("4");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_e_in() {
  let a = document.getElementsByClassName("5");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_e_out() {
  let a = document.getElementsByClassName("5");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_f_in() {
  let a = document.getElementsByClassName("6");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_f_out() {
  let a = document.getElementsByClassName("6");

  for (valeur of a) {
    valeur.style.display = "none";
  }
}

function hover_g_in() {
  let a = document.getElementsByClassName("7");

  for (valeur of a) {
    valeur.style.display = "flex";
  }
}

function hover_g_out() {
  let a = document.getElementsByClassName("7");
  for (valeur of a) {
    valeur.style.display = "none";
  }
}
//
//
// Animation à l'arrivée sur "catégorie"
//
//
//
const sliding = document.querySelector(".categorie_select_maison");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding.classList.add("active");
  }
});

const sliding1 = document.querySelector(".videscroll1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.15
  ) {
    sliding1.classList.add("active");
  }
});

const sliding2 = document.querySelector(".categorie_select_piscine");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding2.classList.add("active");
  }
});

const sliding3 = document.querySelector(".categorie_select_200m2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding3.classList.add("active");
  }
});

const sliding4 = document.querySelector(".categorie_select_insolite");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding4.classList.add("active");
  }
});

const sliding5 = document.querySelector(".videscroll2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding5.classList.add("active");
  }
});

const sliding6 = document.querySelector(".categorie_select_contemporrain");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding6.classList.add("active");
  }
});

const sliding7 = document.querySelector(".videscroll3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding7.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sliding7.classList.add("active");
  }
});

const sliding8 = document.querySelector(".categorie_select_pleinpied");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding8.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding8.classList.add("active");
  }
});

const sliding9 = document.querySelector(".videscroll4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding9.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    sliding9.classList.add("active");
  }
});

const sliding10 = document.querySelector(".categorie_select_etage");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sliding10.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    sliding10.classList.add("active");
  }
});

const slidingTitre = document.querySelector(".titre_en_tete");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingTitre.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.75
  ) {
    slidingTitre.classList.add("active");
  }
});

const slidingTitreCategorie = document.querySelector(".titre_categorie");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport =
    slidingTitreCategorie.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.65
  ) {
    slidingTitreCategorie.classList.add("active");
  }
});
//
//
//Fonction pour la partie catégorie
//
//
function tradi() {
  let a = document.getElementsByClassName("contemporrain");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function contemporrain() {
  let a = document.getElementsByClassName("tradi");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function piscine() {
  let a = document.getElementsByClassName("nopool");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }
  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function deuxCent() {
  let a = document.getElementsByClassName("petit");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function insolite() {
  let a = document.getElementsByClassName("basic");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function etage() {
  let a = document.getElementsByClassName("rez");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
function rez() {
  let a = document.getElementsByClassName("etage");
  let b = document.getElementsByClassName("item");

  for (valeur of b) {
    valeur.style.display = "block";
  }

  for (valeur of a) {
    valeur.style.display = "none";
  }
}
