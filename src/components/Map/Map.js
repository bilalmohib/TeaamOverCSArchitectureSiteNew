import React from "react";
// import ReactMapGL, {
//   NavigationControl,
//   FullscreenControl,
//   GeolocateControl,
//   FlyToInterpolator,
// } from "react-map-gl";
// import CITIES from "assets/Data/cities.json";
// import Pins from "./Pins";

// function Map() {
//   const [viewport, setViewport] = React.useState({
//     latitude: 37.7577,
//     longitude: -100.4376,
//     zoom: 2.5,
//   });

//   const geolocateStyle = {
//     top: 0,
//     left: 0,
//     padding: "10px",
//   };

//   const fullscreenControlStyle = {
//     top: 36,
//     left: 0,
//     padding: "10px",
//   };

//   const navStyle = {
//     top: 72,
//     left: 0,
//     padding: "10px",
//   };

//   const onSelectCity = React.useCallback(({ longitude, latitude }) => {
//     setViewport({
//       longitude,
//       latitude,
//       zoom: 11,
//       transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
//       transitionDuration: "auto",
//     });
//   }, []);

//   return (
//     <ReactMapGL
//       {...viewport}
//       mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxsYWhtZWhib29iIiwiYSI6ImNreG9yZ3o4NjRhZHUyeXE5eTJkb3lwNzEifQ.stiPNaCQ2Z3av7waoQMqnw"
//       width="100%"
//       height="100%"
//       onViewportChange={(newviewport) => setViewport(newviewport)}
//       className="myMap"
//     >
//       <Pins data={CITIES} onSelectCity={onSelectCity} />

//       <GeolocateControl style={geolocateStyle} />
//       <FullscreenControl style={fullscreenControlStyle} />
//       <NavigationControl style={navStyle} />
//     </ReactMapGL>
//   );
// }

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7128146384166!2d74.44596301744384!3d31.477085299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190926aaaaaaab%3A0xef04fa700c084abd!2sAkhtar%20Rasool%20Architects%20%26%20Interior%20Studio!5e0!3m2!1sen!2s!4v1659170804689!5m2!1sen!2s"
      // width="600"
      // height="450"
      style={{
        width: '100%',
        height: '100%',
        border:  0,
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
  );
}

export default Map;
