const cheerio = require('cheerio');
const axios = require("axios");
 
module.exports = async function test(){
    var sub_link = [] 
    var data = []
    const main_url = await axios.get('https://www.sciencedaily.com/news/computers_math/computer_programming/')
    var $ = cheerio.load(main_url.data);
    
    // Get the sub links and add them into the list
    $('.list-group a').each((index,element) => {
        const link = $(element).attr('href')
        sub_link.push('https://www.sciencedaily.com'+link);
    })
    
    for (var i = 0; i<sub_link.length; i++){
        var inner_data = []
        inner_data.push(sub_link[i])
        const sub_url = await axios.get(sub_link[i])
        var $ = cheerio.load(sub_url.data);
        const title = $('.headline').text()
        inner_data.push(title);
        $('.dl-horizontal').each((index, element) => {
            const date = $(element).find('#date_posted').text()
            const source = $(element).find('#source').text()
            const summary = $(element).find('#abstract').text() 
            inner_data.push(date,source,summary)   
        })
        data.push(inner_data);
    }
    return data
}
