const axios = require("axios");

axios.post('https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights',
            { query : {
                "locale": "en-GB",
                "market": "UK",
                "searchTerm": "loccn"
            }},
            { headers: {
                'x-api-key':'prtl6749387986743898559646983194'
            }}

)
     .then(result => console.log(result.data))
     .catch(err => console.log(err))

const efet = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "prtl6749387986743898559646983194");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "query": {
        "locale": "en-GB",
        "market": "UK",
        "searchTerm": "loccn"
      }
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  
  //efet();