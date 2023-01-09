const CLIENT_ID = "vzqvM7LCYhF0yBelj9jJ7cUCLtFcFE94o4UKCEZRgIk";

export const fetchNewData = async (query) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=vzqvM7LCYhF0yBelj9jJ7cUCLtFcFE94o4UKCEZRgIk`;
  const response = await fetch(url);

  return response.json();
};

