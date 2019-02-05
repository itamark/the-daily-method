const fetch = require('node-fetch')
const cheerio = require('cheerio')
const fs = require('fs')

let $;
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let result = [];
const getData = async ()=>{
    const stuff = await fetch('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index')
    const res = await stuff.text();
    $ = cheerio.load(res);
    let all = Array.from($('h2 + ul li'));
    result = all
            .filter(item => $(item).find('.sidebar-icon').length === 0)
            .map(item => {
                const linkEl = $(item).find(':first-child');
                const link = 'https://developer.mozilla.org'+linkEl.attr('href');
                const splitLink = $(item).find(':first-child').attr('href').split('/');
                const withoutLink = $(item).remove(linkEl);
                return {
                    title: `${splitLink[splitLink.length - 2]}.${splitLink[splitLink.length - 1]}()`,
                    summary: withoutLink.text().trim().split(': ')[1],
                    link
                }
            });
            console.log(result)
            fs.writeFileSync('./data.json', JSON.stringify(result) , 'utf-8'); 
}
getData()