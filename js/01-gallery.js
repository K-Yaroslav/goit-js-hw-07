import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector("div.gallery");

const makeGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= "${description}"
    >
  </a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", makeGallery);

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  const itemEl = e.target.dataset.source;
  console.log(e.target.dataset);

  const instance = basicLightbox.create(`
    <img src="${itemEl}" width="800" height="600">
`);
  instance.show();
});

console.log(galleryItems);
