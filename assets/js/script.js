"use strict";
let map;
let mapEvent;
const latitude = 45.7988904;
const longitude = 15.8869043;
map = L.map("map").setView([latitude, longitude], 13);
L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(L.popup({
    maxWidth: 150,
    minWidth: 100,
    autoClose: false,
    closeOnClick: false,
}))
    .setPopupContent("Savska opatovina 96, 10070, Zagreb, Croatia")
    .openPopup();
//# sourceMappingURL=script.js.map