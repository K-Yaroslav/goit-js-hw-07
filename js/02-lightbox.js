import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>
</li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});

console.log(galleryItems);
