const puppeteer = require("puppeteer");


async function getCityImage(cityName) {
    try {
        let img = "big ol tibbies";
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({ width: 1288, height: 800});
        await page.goto("https://images.google.com");
        await page.type('input.gLFyf.gsfi', "London");
        await page.click('button.Tg7LZd');
        await page.waitForSelector('.Q4LuWd')
        // await page.evaluate((sel) => {
        //     let elements = Array.from(document.querySelectorAll(sel));
        //     let widths = elements.map(element => {
        //         return element.getProperty("width");
        //     })
        //     return widths
        // }, '.Q4LuWd');
            .then( async () => {
                img = await page.$$('.Q4LuWd')[1]; //this is the base object evaluated by puppeteer
                
                let imgwidth = await img.getProperty("width");
                let widthjson = await imgwidth.jsonValue();

                // let i = await 2;
                // await async function () {
                //     while (i < 5) {
                //         img = await page.$(`.Q4LuWd:nth-child(${i})`) Q4LuWd
                //         imgwidth = await img.getProperty("width");
                //         widthjson = await imgwidth.jsonValue();
                //         await i++;
                //     }
                //     await console.log(widthjson);
                // }() 

                //await console.log(imgwidth);
                await console.log(widthjson);
                await console.log(typeof widthjson);

                let imgsrc = await img.getProperty('src'); //this is the source property of that object
                let srctext = await imgsrc.jsonValue(); //this is the string of that source value

               
                //await console.log(img);
                //await console.log(imgsrc);
                //await console.log(srctext);

                await browser.close();

                const newpage = await browser.newPage();
                await newpage.goto(`${srctext}`);

            })
            console.log(widths);
    } catch(err) {
        console.log(err);
    }
    
}

async function getMainImage(cityName, condition) {
    try {
        let img = "big ol tibbies";
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({ width: 1288, height: 800});
        await page.goto("https://images.google.com");
        await page.type('input.gLFyf.gsfi', "London");
        await page.click('button.Tg7LZd');
        //await page.waitForSelector('div.ssfWCe')
        //await page.click('div.ssfWCe'); //click tools
        //await page.waitForTimeout(1000);
        //await page.waitForSelector('div.xFo9P');
       // await page.click('div.xFo9P'); //click size
        //await page.waitForTimeout(600);
        //await page.waitForSelector('a.MfLWbb');
        //await page.click('a.MfLWbb'); //click large

        //click first image
        let i = await 0;
        await async function() {
            let bool = false;
            while (bool == false) {
                await page.waitForSelector(`div[data-ri="${i}"]`)
                await page.click(`div[data-ri="${i}"]`);
                await page.waitForSelector('span.VSIspc');
                let size = await page.$('span.VSIspc');
                let size2 = await size.getProperty("textContent");
                let size3 = await size2.jsonValue();
                let subsize = await parseInt(size3.substring(0, size3.indexOf(' ')));
                await console.log(subsize);

                await async function () {
                    if(subsize > 1250) {
                        await page.waitForTimeout(1000);
                        await page.waitForSelector('#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div > div.v4dQwb > a > img');
                        //await page.click('img.n3VNCb', {button: 'right'});
                        let src = await page.$('#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div > div.v4dQwb > a > img');
                        let src2 = await src.getProperty('src');
                        let src3 = await src2.jsonValue();
                        await console.log(src3);
                        if (src3.length < 500) {
                            bool = true;
                            let newPage = await browser.newPage();
                            await newPage.goto(src3);
                        }
                        await console.log(src3.length);
                        //let src2 = await srce.jsonValue()
                        //let src3 = await src2.jsonValue();
                        //await console.log(src2);
                        // let newPage = await browser.newPage();
                        // await newPage.goto(`${src}`);
                        await page.waitForTimeout(200);
                    }
                }()
                await page.waitForTimeout(500);
                await i++;
                

            }
        }();
        //await browser.close();

        // await page.waitForSelector('img.Q4LuWd');
        // await page.click('img.Q4LuWd')

        // await page.waitForSelector('div[data-ri="2"]');
        // await page.click('div[data-ri="2"]')

        //check size of that image
        // await page.waitForSelector('span.VSIspc');
        // let size = await page.$('span.VSIspc');
        // let size2 = await size.getProperty("textContent");
        // let size3 = await size2.jsonValue();

        // let subsize = await size3.substring(0, size3.indexOf(' '));

        // await console.log(size3);
        // await console.log(subsize);

        // await page.click('div[data-ri="2"]')
        //     .then( async () => {
        //         img = await page.$$('img.Q4LuWd');
        //         await page.click(`${img[2]}`);

        //     })
        


            // .then( async () => {
            //     img = await page.$$("div.isv-r");
            //     //let latVal = await lat.getProperty('textContent');
            //     //latVal = await latVal.jsonValue();
            //     imgwidth = await img[2];
            //     //imgwidth = await imgwidth.jsonValue();
            //     await console.log(imgwidth);
            //     //let newPage = await browser.newPage();
            //     //await newPage.goto(`${imgwidth}`);

            //     //await console.log(latVal);
            //     await browser.close();
                
            // })
           
    } catch(err) {
        console.log(err);
    }
    
}

//getCityImage();
getMainImage();