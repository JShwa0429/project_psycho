// const axios = require('axios');
// const cheerio = require('cheerio');
// let url = 'https://www.career.go.kr/inspct/web/psycho/vocation/report?seq=NTU1MTMwMDI';

import axios from "axios";

// axios.get(url)
//     .then(html => {
//         const $ = cheerio.load(html.data);
//         let nameArr = [];
//         $('div.aptitude-tbl-list')
//             .find('tbody tr')
//             .find('td')
//             .text((i,el) => {
//                 console.log(el)
//             });

//         console.log(nameArr);
//     })
//     .catch(error=> console.error(error));

// console.log("End of Main Program");

class Api {
  constructor() {
    this.key = "a4c80b03ef9a8b8df73cf7b36775257c";
  }

  async getQuestion(seq) {
    let result = [];
    const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${this.key}&q=${seq}`;
    await axios
      .get(url)
      .then((res) => {
        result = res.data["RESULT"];
      })
      .catch((err) => console.error(err));
    return result;
  }
}

const api = new Api();
export default api;
