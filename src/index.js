import {initMap} from "./map";
/*приложение не запускалось.
в map.js нет default экспорта, поэтому для импорта имя нужно заключить в  {}, согласно спецификации export\import'а)*/

ymaps.ready(() => {
  initMap(ymaps, "map");
  console.log("inited");
});
