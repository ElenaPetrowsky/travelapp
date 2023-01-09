import axios from "axios";

export const getCities = async (city) => {
  let url = `https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights`;
  const data = await axios.post('https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights',
  { query : {
      "locale": "en-GB",
      "market": "UK",
      "searchTerm": city
  }},
  { headers: {
      'x-api-key':'prtl6749387986743898559646983194'
  }}

)

return data?.data

};
