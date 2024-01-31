import React from "react";
import "../App.css";
import hour from "./hourTicks.png";
import minutes from "./minutesTicks.png";
import minutesPin from "./minutesPin.png";
import hoursPin from "./hoursPin.png";
import secondsPin from "./secondsPin.png";
import pinStopper from "./pinStopper.png";



function Home() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="clock position-relative">
          <div>
            <img src={hour} width="200px" alt="hours" />
          </div>
          <div className="minutes-ticks">
            <img src={minutes} width="200px" alt="hours" />
          </div>
          <div className="minutes-pin">
          <img src={minutesPin} width="80px" alt="hours" />
          </div>
          <div className="seconds-pin">
          <img src={secondsPin} width="80px" alt="hours" />
          </div>
          <div className="hours-pin">
          <img src={hoursPin} width="80px" alt="hours" />
          </div>
          <div className="pin-stopper">
          <img src={pinStopper}  alt="hours" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
