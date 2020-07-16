const product = {
    tittle: '',
    currentPrice: '',
    prevPrice: '',
    mainImg: '',
    allImg: [],

}
product.tittle = document.querySelector('h1').textContent;
product.currentPrice = document.querySelector('[data-id="current-price"]').textContent;
product.prevPrice = document.querySelector('[data-id="previous-price"]').textContent;
const image=document.querySelectorAll('.image-thumbnail')
product.mainImg = image[0].firstElementChild.firstElementChild.src;
for (let i = 0; i < image.length; i++) {
    product.allImg.push(image[i].firstElementChild.firstElementChild.src);
}
console.log(product);