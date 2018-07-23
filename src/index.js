import {initMap} from "./map";//приложение не запускалось(в map.js нет default экспорта, поэтому нужны {})

ymaps.ready(() => {
  initMap(ymaps, "map");
  console.log("inited");
});
