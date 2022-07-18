import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML(
  "beforeend",
  createGalleryCardsMarkup(galleryItems)
);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}
const captionOptions = {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
};

const lightbox = new SimpleLightbox(".gallery a", captionOptions);
lightbox.on("show.simplelightbox", function () {
  open;
});
