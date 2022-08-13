import React from "react";

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
