const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630');

    const result = await page.evaluate(() => {
        const  title = document.querySelector('h1').textContent;
        const  currentPrice = document.querySelector('[data-id="current-price"]').textContent;
        const prevPrice=document.querySelector('[data-id="previous-price"]').textContent;
        const image=document.querySelectorAll('.image-thumbnail')
        let mainImg=image[0].firstElementChild.firstElementChild.src;
        let allImg=[];
        for (let i=0;i<image.length;i++){
            allImg.push(image[i].firstElementChild.firstElementChild.src)
        }
        return {
            title,
            currentPrice,
            prevPrice,
            mainImg,
            allImg

        }

    });
    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value);
});