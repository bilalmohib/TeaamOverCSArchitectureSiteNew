import React from "react";
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";
import CITIES from "assets/Data/cities.json";
import Pins from "./Pins";

function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -100.4376,
    zoom: 2.5,
  });

  const geolocateStyle = {
    top: 0,
    left: 0,
    padding: "10px",
  };

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: "10px",
  };

  const navStyle = {
    top: 72,
    left: 0,
    padding: "10px",
  };

  const onSelectCity = React.useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxsYWhtZWhib29iIiwiYSI6ImNreG9yZ3o4NjRhZHUyeXE5eTJkb3lwNzEifQ.stiPNaCQ2Z3av7waoQMqnw"
      width="100%"
      height="100%"
      onViewportChange={(newviewport) => setViewport(newviewport)}
      className="myMap"
    >
      <Pins data={CITIES} onSelectCity={onSelectCity} />

      <GeolocateControl style={geolocateStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />
    </ReactMapGL>
  );
}

export default Map;
