const request = require('request');
const cheerio = require('cheerio');

module.exports = app => {
    request('https://www.sciencedaily.com/news/computers_math/computer_programming/',(error,
        response,html) => {
            if(!error & response.statusCode ==200){
                const $ = cheerio.load(html);
                // const article = $('.list-group')
                const article = $('.list-group a')
                                .each((index,element) => {
                                    const item = $(element).text()
                                    const link = $(element).attr('href')
                                    const sublink = 'https://www.sciencedaily.com'+link

                                    request(sublink, (error,response,html) => {
                                        if(!error & response.statusCode == 200){
                                            const $2 = cheerio.load(html)
                                            // const sub_article = $2('.dl-horizontal').children().next().next().next()
                                            
                                            const headline = $2('.headline').text()
                                            console.log(headline)
                                            const sub_article = $2('.dl-horizontal')
                                                                    .each((index, element) => {
                                                                        const item = $2(element).find('#source')
                                                                        // console.log(item.html())
                                                                    })
                                            // console.log(sub_article.html())
                                        }   
                                        else{
                                            console.log("sublink has an error")
                                        }
                                    })
                                });
                                

                // console.log(article.html())
            }   
            else{
                console.log("link has an error")
            }
    });
}
