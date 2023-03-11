"use strict";
let map;
let mapEvent;
//Map data
const locations = [
  {
    name: "Saint Mary, Jamaica",
    latitude: 18.2807738,
    longitude: -77.0265583,
    link: null,
  },
  {
    name: "Adana, Turkey",
    latitude: 36.995128,
    longitude: 35.340858,
    link: null,
  },
  {
    name: "Dushanbe, Tajikistan",
    latitude: 38.5794649,
    longitude: 68.7099874,
    link: null,
  },
  {
    name: "Hamilton, Canada",
    latitude: 43.2609746,
    longitude: -80.0735755,
    link: null,
  },
  {
    name: "Boynton Beach, United States",
    latitude: 26.5281465,
    longitude: -80.1170553,
    link: null,
  },
  {
    name: "Tokyo, Japan",
    latitude: 36.9513,
    longitude: 138.7833,
    link: "./pages/japan.html",
  },
  {
    name: "Yuzawa Niigata, Japan",
    latitude: 35.6982,
    longitude: 139.7722639,
    link: "./pages/japan.html",
  },
  {
    name: "Islamabad, Pakistan",
    latitude: 33.73145,
    longitude: 73.0629278,
    link: null,
  },
  {
    name: "Vienna, Austria",
    latitude: 48.210144,
    longitude: 16.3553778,
    link: "./pages/austria.html",
  },
  {
    name: "Zagreb, Croatia",
    latitude: 45.813867,
    longitude: 15.9818954,
    link: "./pages/croatia.html",
  },
  {
    name: "Pag Island, Croatia",
    latitude: 44.538981,
    longitude: 14.914177,
    link: "./pages/croatia.html",
  },
  {
    name: "Split, Croatia",
    latitude: 43.5083542,
    longitude: 16.440241,
    link: "./pages/croatia.html",
  },
  {
    name: "Karlovac, Croatia",
    latitude: 45.4913472,
    longitude: 15.5536194,
    link: "./pages/croatia.html",
  },
  {
    name: "Prague, Czechia",
    latitude: 50.1012084,
    longitude: 14.4550609,
    link: "./pages/czechia.html",
  },
  {
    name: "Copenhagen, Denmark",
    latitude: 55.6946444,
    longitude: 12.5833472,
    link: "./pages/denmark.html",
  },
  {
    name: "Stockholm, Sweden",
    latitude: 59.3262416,
    longitude: 17.8416281,
    link: null,
  },
  {
    name: "Budapest, Hungary",
    latitude: 47.50175,
    longitude: 19.0349472,
    link: "./pages/hungary.html",
  },
  {
    name: "Roma, Italy",
    latitude: 41.9010583,
    longitude: 12.4833889,
    link: "./pages/italy.html",
  },
  {
    name: "Venice, Italy",
    latitude: 45.43381,
    longitude: 12.339409,
    link: "./pages/italy.html",
  },
  {
    name: "Milano, Italy",
    latitude: 45.463775,
    longitude: 9.1891583,
    link: "./pages/italy.html",
  },
  {
    name: "Koper, Slovenia",
    latitude: 45.5482022,
    longitude: 13.7296051,
    link: "./pages/slovenia.html",
  },
  {
    name: "Ljubljana, Slovenia",
    latitude: 45.7795327,
    longitude: 14.20491,
    link: "./pages/slovenia.html",
  },
  {
    name: "Hamburg, Germany",
    latitude: 53.5562472,
    longitude: 9.9791944,
    link: "./pages/germany.html",
  },
  {
    name: "London, United Kingdom",
    latitude: 51.501364,
    longitude: -0.1418899,
    link: "./pages/UK.html",
  },
];

//Initialize map
map = L.map("map").setView([51.501364, -0.1418899], 5);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Render Locations on Map
locations.map((location) => {
  //create custom marker
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  //add marker
  L.marker([location.latitude, location.longitude], {
    icon: redIcon,
  })
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 150,
        minWidth: 100,
        autoClose: true,
        closeOnClick: true,
      })
    )
    .setPopupContent(
      location.link !== null
        ? `${location.name}<hr/><a class="map-click" href=${location.link}>View Blog</a>`
        : location.name
    )
    .openPopup()
    .closePopup();
});

// country count
const countryHTML = document.getElementById("country-count");
const countriesNum = [
  ...new Set(locations.map((location) => location.name.split(",")[1].trim())),
];
countryHTML.innerHTML = countriesNum.length;

/**'back to top' link at the
bottom of them. Consider a navigation system with fixed positioning. */
