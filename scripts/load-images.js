import api from "./nasa-api.js";
const imagesGalleryEl = document.querySelector(".images__gallery");

const images = await api.search("earth and iss");

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
