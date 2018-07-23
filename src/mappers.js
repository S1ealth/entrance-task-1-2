export function mapServerData(serverData) {
  return {
    type: "FeatureCollection",
    features: serverData.map((obj, index) => ({
      id: index,
      type: "Feature",
      isActive: obj.isActive,
      geometry: 
      {
        type: "Point",
        coordinates: [obj.lat,obj.long]/*метки не появлялись в Москве.
         перебрав подгрузку понял, что проблема с координатами (когда зазумил карту).*/ 
      },
      properties: {
        iconCaption: obj.serialNumber
      },
      options: {
        preset: getObjectPreset(obj)
      }
    }))
  };
}

function getObjectPreset(obj) {
  return obj.isActive
    ? 'islands#blueCircleDotIconWithCaption'
    : 'islands#redCircleDotIconWithCaption';
}
