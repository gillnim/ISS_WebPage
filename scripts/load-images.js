import nasaApi from "./nasa-api.js";
const imagesGalleryEl = document.querySelector(".images__gallery");
const api = new nasaApi();

const images = await api.search("earth and iss");

const test = await api.getApod();
console.log(test);

const createImage = (src) => {
  const img = document.createElement("img");
  img.classList.add("images__img");
  img.setAttribute("src", src);
  return img;
};

const renderElements = (objArray, createComponent, parentEl) => {
  parentEl.replaceChildren();

  objArray.forEach((obj) => {
    parentEl.appendChild(createComponent(obj));
  });
};

renderElements(images, createImage, imagesGalleryEl);
