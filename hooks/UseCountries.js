import { getCountry } from "../api/cities";

const UseCountries = () => {
  async function GetCountry(isocode, handler) {
    handler(true);
    const response = await getCountry(isocode);
    handler(false);
    return response[0];
  }
  return GetCountry;
};

export default UseCountries;
