import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryBox = document.querySelector('.gallery');

const makeGalleryElement = ({preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    
};
const makeImageGallery = galleryItems.map(makeGalleryElement).join(" ");
galleryBox.insertAdjacentHTML("afterbegin", makeImageGallery);


galleryBox.addEventListener('click', onOpenGalleryElement);

function onOpenGalleryElement(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: "250"});
    console.dir(lightbox);
    lightbox.open();
    
    

}

