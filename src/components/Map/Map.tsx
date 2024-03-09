import { Box, Title, Text } from "@mantine/core";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";

interface MarkerType {
  name: string;
  coordinates: [number, number];
}

const markers: MarkerType[] = [
  { name: "sf1", coordinates: [-122.4193286, 37.7792588] },
  { name: "nyc", coordinates: [-74.005974, 40.712776] },
  { name: "nc", coordinates: [-78.63861, 35.7721] },
  { name: "sf2", coordinates: [-122.1598465, 37.4443293] },
  { name: "sf3", coordinates: [-121.99059, 37.050096] },
  { name: "phl", coordinates: [120.9799964, 14.5906346] },
];

const width = 800;
const height = 420;

const projection = geoPatterson()
  .translate([width / 2, height / 2])
  .scale(120);

export const Map = () => {
  return (
    <Box
      component={ComposableMap}
      projection={projection}
      width={width}
      height={height}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width: "100%",
        height: "auto",
      }}
    >
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#ffffff"
              stroke="#000000"
              strokeWidth={0.5}
              strokeDasharray={"1 1"}
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#E35F25" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </Box>
  );
};
