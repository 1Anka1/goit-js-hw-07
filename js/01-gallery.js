import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}
function onGalleryContainerClick(e) {
  e.preventDefault();

  const instance = basicLightbox.create(
    `
        <img src="${e.target.dataset.source}" width="800" height="600">
    `
  );
  
  instance.show();
}
// Тут невдалося реалізувати закриття Escape тому, що змінна instance не доступна
// document.addEventListener("keydown", onEscKeyPress);
// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
//   console.log(event.code);
// }
