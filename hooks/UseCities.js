import { useState, useEffect } from "react";

import { getCities } from "../api/cities";

const UseCities = (city, handler) => {
  const [cities, setCities] = useState({});
  useEffect(() => {
    handler(true);

    if (city.length > 2) {
      getCities(city)
        .then((response) => {
          // console.log(response?.places)
          setCities(response?.places);
          handler(false);
        })
        .catch((error) => {
          console.log(error);
          handler(false);
        });
    } else {
      setCities([]);
      handler(false);
    }
  }, [city]);

  return cities;
};

export default UseCities;
