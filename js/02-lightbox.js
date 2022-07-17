import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML(
  "beforeend",
  createGalleryCardsMarkup(galleryItems)
);
galleryList.addEventListener(`click`, GalleryItemClick);

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
function GalleryItemClick(event) {
  event.preventDefault();
}

const galleryListItemA = document.querySelector(".gallery a");
galleryListItemA.addEventListener(`click`, elementCaptionOptions);

function elementCaptionOptions() {
  let captionOptionsElement = {};
  return captionOptionsElement;
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
