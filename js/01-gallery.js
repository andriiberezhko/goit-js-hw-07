import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const makeGalleryElement = ({preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    
};
const makeImageGallery = galleryItems.map(makeGalleryElement).join(" ");
galleryBox.insertAdjacentHTML("afterbegin", makeImageGallery);

galleryBox.addEventListener('click', onOpenGalleryElement);

function onOpenGalleryElement(event) {
    event.preventDefault();

    // window.addEventListener('keydown', onEscKeyPress)
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const newSrc = event.target.dataset.source;
    const html = `<img width="1400" height="900" src="${newSrc}">`;
    
    const instance = basicLightbox.create(html, newSrc,);
    instance.show(() => console.log('lightbox now visible'));
    // instance.close(() => console.log('lightbox not visible anymore'));
    setTimeout(() => {
		instance.close(() => console.log('finished close()'))
	}, 3000)
     
}