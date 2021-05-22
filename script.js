window.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.querySelector("#checkbox");
  let header = document.querySelector("header");
  let body = document.querySelector("body");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("white_bg");
      header.classList.add("white_bg_header");
      document.querySelector(".gh-header--title").style.color = "#1D1F29";
      document.querySelector(".gh-header--info").style.color = "#63687D";
      document.querySelector(".mode").style.color = "#848BAB";
      document.querySelector(".os-subtitle span").style.color = "#63687D";
      document.querySelectorAll(".os-card").forEach((box) => {
        box.style.background = "#F2F2F2";
      });
      document.querySelectorAll(".os-card--quantity").forEach((n) => {
        n.style.color = "#1D1F29";
      });
      document.querySelectorAll(".os-card2").forEach((c) => {
        c.style.background = "#F1F3FA";
      });
      document.querySelectorAll(".os-card2--quantityP").forEach((nc) => {
        nc.style.color = "#1D1F29";
      });
      document.querySelectorAll(".os-card--user").forEach((ic) => {
        ic.style.color = "#63687D";
      });
      document.querySelectorAll(".os-card2--info").forEach((ic) => {
        ic.style.color = "#63687D";
      });
    } else {
      header.classList.remove("white_bg_header");
      body.classList.remove("white_bg");
      document.querySelector(".gh-header--title").style.color = "#FFFFFF";
      document.querySelector(".gh-header--info").style.color = "#8C98C6";
      document.querySelector(".os-subtitle span").style.color = "#63687D";
      document.querySelectorAll(".os-card").forEach((box) => {
        box.style.background = "#252B42";
      });
      document.querySelectorAll(".os-card--quantity").forEach((n) => {
        n.style.color = "#FFFFFF";
      });
      document.querySelectorAll(".os-card2").forEach((c) => {
        c.style.background = "#252B42";
      });
      document.querySelectorAll(".os-card2--quantityP").forEach((nc) => {
        nc.style.color = "#FFFFFF";
      });
      document.querySelectorAll(".os-card2--info").forEach((ic) => {
        ic.style.color = "#8C98C6";
      });
      document.querySelectorAll(".os-card--user").forEach((ic) => {
        ic.style.color = "#8C98C6";
      });
    }
  });
});
