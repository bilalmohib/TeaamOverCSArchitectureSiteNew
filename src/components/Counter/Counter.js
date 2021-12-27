import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Counter({ end, showPlusSign = true, duration = 2 }) {
  const [viewPortEntered, setViewPortEntered] = React.useState(false);

  return (
    <CountUp start={viewPortEntered ? null : 0} end={end} duration={duration}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              } else {
                setViewPortEntered(false);
              }
            }}
            delayedCall
          >
            <p className="fs-30px weight-7">
              <span ref={countUpRef} />
              {showPlusSign ? "+" : ""}
            </p>
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
}
