
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems[0].original);

const galleryElRef = document.querySelector(".gallery");

function makeGalleryMarkup(object) {
  return object
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                   <img
                      class="gallery__image"
                      src="${preview}"
                      alt="${description}"
                  />
              </a>
          </li>`
    )
    .join("");
}
galleryElRef.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
