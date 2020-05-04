import React from 'react';
import {ComposableMap, Geographies, Geography, Marker} from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Brisbane", coordinates: [153.0251, -27.4698] },
  { name: "Melbourne", coordinates: [144.9631, -37.8136] },
  { name: "Hong Kong", coordinates: [114.1694, 22.3193] },
  { name: "London", coordinates: [-0.1278, 51.5074] },
  { name: "New York", coordinates: [-74.0060, 40.7128] },
];

const OfficeMap = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      width="1000"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({name, coordinates}) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#24Cdfd" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default OfficeMap;
