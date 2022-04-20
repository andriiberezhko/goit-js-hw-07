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
    if (event.target.nodeName !== 'IMG') {
    return;
    }
    
    const newSrc = event.target.dataset.source;
    const html = `<img width="1400" height="900" src="${newSrc}">`;
    
    const modal = basicLightbox.create(html, { 
        closable: true,
        onShow: () => { window.addEventListener('keydown', pressEscBtn) } ,
        onClose: () => { window.removeEventListener('keydown', pressEscBtn) }
    });
    
    
    openModal(modal);
   
    function pressEscBtn(event) {
        
        if (event.code === 'Escape') {
        modal.close();
        
    };
}

}

function openModal(open) {
    open.show();
   
}


