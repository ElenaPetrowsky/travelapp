import { useState, useEffect } from "react";

import { getCities } from "../api/cities";

const UseCities = (city, handler) => {
  const [cities, setCities] = useState({});
  useEffect(() => {
    handler(true);

    if (city.length > 1) {
      getCities(city)
        .then((response) => {
          setCities(response);
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
