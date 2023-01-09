
export const getCities = (city) => {
  return fetch(`http://151.236.216.240:4000/cities?q=${city}&_sort=name&_order=asc&_limit=15`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};



export const getCountry = (isocode) => {
  return fetch(`http://151.236.216.240:4000/countries?iso2_like=${isocode}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};



