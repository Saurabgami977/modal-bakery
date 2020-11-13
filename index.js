let btn = document.querySelectorAll('.button');
let storeItems = document.querySelectorAll('.store-item');
let search = document.querySelector('#search');


btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        if (filter === 'all') {
            storeItems.forEach(item => {
                item.style.display = 'block'
            })
        } else if (filter === 'cakes') {
            show('cakes');
        } else if (filter === 'cupcakes') {
            show('cupcakes')
        } else if (filter === 'doughnuts') {
            show('doughnuts')
        } else if (filter === 'sweets') {
            show('sweets')
        }
    })
})

search.addEventListener('input', find);

function find() {
    storeItems.forEach(item => {
        text = item.classList.toString();
        if (text.includes(`${search.value}`)) {
            item.style.display = `block`;
            item.style.margin = `2px 30px`
        } else {
            item.style.display = 'none'
        }
    });
}

function show(foods) {
    storeItems.forEach(item => {
        if (item.classList.contains(foods)) {
            item.style.display = 'block'
            item.style.margin = '2px 30px'
        } else {
            item.style.display = 'none'
        }
    });
};













let leftBtn = document.querySelector('.left-btn-icon');
let rightBtn = document.querySelector('.right-btn-icon');
let closeBtn = document.querySelector('.close-btn-icon')
let modalImg = document.querySelector('.modal-image');
let storeItem = document.querySelectorAll('.store-item');
let modalContainer = document.querySelector('.modal-container')
let images = document.querySelectorAll('.store-img');

let imageList = [];
images.forEach(image => [
    imageList.push(image.src)
])
let imageCounter = 0;

leftBtn.addEventListener('click', previous);
rightBtn.addEventListener('click', next);
closeBtn.addEventListener('click', closeModal);

storeItem.forEach(element => {
    element.addEventListener('click', (e) => {
        let imageSrc = e.target.src;
        if (imageSrc) {
            modalImg.style.background = `url(${imageSrc}) center/cover no-repeat fixed`
            modalContainer.classList.add('showModal')
            imageCounter = imageList.indexOf(imageSrc);
            
        }
    })
});

function popupModal() {
    modalImg.style.background = `url(img/cake-2.jpeg) center/cover no-repeat fixed`
}

function previous() {
    imageCounter--;
    if (imageCounter < 0) {
        imageCounter = imageList.length - 1;
    }
    modalImg.style.background = `url(${imageList[imageCounter]}) center/cover no-repeat fixed`
}

function next() {
    imageCounter++;
    if(imageCounter > imageList.length - 1){
        imageCounter = 0;
    }
    modalImg.style.background = `url(${imageList[imageCounter]}) center/cover no-repeat fixed`
}

function closeModal() {
    document.querySelector('.modal-container').classList.remove("showModal")
    document.querySelector('.modal-container').classList.add("closeModal")
}