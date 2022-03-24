export default function resize(containerLayer, mainContent){

  const d = document;
  const divBackgroundImage = d.querySelector(containerLayer);
  const form = d.querySelector(mainContent);

  let mainLabelHeight = form.offsetHeight;
  console.log(mainLabelHeight);

  divBackgroundImage.style.height = `${mainLabelHeight}px`;

  window.addEventListener("resize", function () {
      mainLabelHeight = form.offsetHeight;
      divBackgroundImage.style.height = `${mainLabelHeight}px`;
    }, true);
}