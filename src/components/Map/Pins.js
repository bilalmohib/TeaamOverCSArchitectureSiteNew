import * as React from "react";
import { Marker } from "react-map-gl";

const SIZE = 20;

function Pins(props) {
  const { data } = props;

  return data.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}
    >
      <img
        src="https://www.chapmantaylor.com/assets/img/utils/map-marker.png"
        alt=""
        onClick={() => props.onSelectCity(city)}
        style={{
          cursor: "pointer",
          width: SIZE,
        }}
      />
    </Marker>
  ));
}

export default React.memo(Pins);
