import resize from "./resize_img.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  console.log("Se inició correctamente...");
  resize(".container-layer", ".main-content");
});