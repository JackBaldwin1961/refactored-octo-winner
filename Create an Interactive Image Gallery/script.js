function addImage() {
    const imageInput = document.getElementById('imageInput');
    const imageUrl = imageInput.value;

    if (imageUrl) {
        const gallery = document.getElementById('gallery');

        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Gallery Image';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = () => {
            gallery.removeChild(galleryItem);
        };

        galleryItem.appendChild(img);
        galleryItem.appendChild(removeBtn);
        gallery.appendChild(galleryItem);

        imageInput.value = '';
    }
}

document.getElementById('addImageBtn').addEventListener('click', addImage);