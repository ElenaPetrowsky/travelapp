export const countries = [
  {
    id: 1,
    name: "En Voiture",
    image: require("../assets/car.png"),
    places: [
      {
        id: 1,
        name: "Paris",
        description:
          "Envoyez vos colis en toute sécurité à paris avec nos services",
        image:
          "https://unsplash.com/photos/WSvth_lwCi0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8cGFyaXN8fDB8fHx8MTYzOTgxMjc3OQ&force=true&w=640",
        rate: "4.89",
        mapInitialRegion: {
          latitude: 1.557177,
          longitude: 110.351902,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        info: {
          entityId: "27539733",
          iataCode: "PAR",
          parentId: "27539733",
          name: "Paris",
          countryId: "FR",
          countryName: "France",
          cityName: "Paris",
          location: "48.85662237511698,2.3428759930239886",
          hierarchy: "Paris|Île-de-France|France",
          type: "PLACE_TYPE_CITY",
          highlighting: [[0, 5]],
        },
      },
      {
        id: 2,
        name: "Lyon",
        description: "Vous pouvez envoyer vos colis même à lyon",
        image:
          "https://unsplash.com/photos/Uzvx4QuA_FY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bHlvbnx8MHx8fHwxNjM5ODExMDc0&force=true&w=640",

        rate: "4.89",
        mapInitialRegion: {
          latitude: 3.135662,
          longitude: 101.687128,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        info: {
          entityId: "95673757",
          iataCode: "LYS",
          parentId: "27544221",
          name: "Lyon",
          countryId: "FR",
          countryName: "France",
          cityName: "Lyon",
          location: "45.725556,5.081667",
          hierarchy: "Lyon (LYS), Lyon|Rhône|Auvergne-Rhône-Alpes|France",
          type: "PLACE_TYPE_AIRPORT",
          highlighting: [],
        },
      },

      {
        id: 3,
        name: "Pekin",
        description:
          "Envoyez vos colis en toute sécurité à paris avec nos services",
        image:
          "https://unsplash.com/photos/LoD2-o77Tqc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cGVraW58ZW58MHx8fHwxNjczMjYzMDc1&force=true&w=640",
        rate: "4.89",
        mapInitialRegion: {
          latitude: 1.557177,
          longitude: 110.351902,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        info: {
          entityId: "36109218",
          parentId: "36109218",
          name: "Pekin",
          countryId: "US",
          countryName: "United States",
          cityName: "Pekin",
          location: "40.5675387901,-89.6406579049",
          hierarchy: "Pekin|Tazewell County|Illinois|United States",
          type: "PLACE_TYPE_CITY",
          highlighting: [[0, 5]],
          airportInformation: {
            iataCode: "PIA",
            name: "Greater Peoria",
            countryId: "US",
            cityId: "PIAA",
            entityId: "128667402",
            parentId: "27545958",
            distance: {
              value: 6.9291024,
              unitCode: "mile",
            },
            location: "40.661389,-89.687222",
          },
        },
      },
      {
        id: 4,
        name: "Shanghai",
        description: "Vous pouvez envoyer vos colis même à lyon",
        image:
          "https://unsplash.com/photos/D8iZPlX-2fs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c2hhbmdoYWl8ZW58MHx8fHwxNjczMjYyNTc3&force=true&w=640",

        rate: "4.89",
        mapInitialRegion: {
          latitude: 3.135662,
          longitude: 101.687128,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        info: {
            "entityId": "27546079",
            "iataCode": "SHA",
            "parentId": "27546079",
            "name": "Shanghai",
            "countryId": "CN",
            "countryName": "China",
            "cityName": "Shanghai",
            "location": "31.197931622768238,121.89914579992515",
            "hierarchy": "Shanghai|Shanghai|China",
            "type": "PLACE_TYPE_CITY",
            "highlighting": [
                [
                    0,
                    8
                ],
                [
                    9,
                    17
                ]
            ]
        },
      },


    ],
  },
];

const dummyData = { countries };

export default dummyData;
