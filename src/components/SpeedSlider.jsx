import React from 'react';

function SpeedSlider(){
  return (
    <div className="speed-slider">
      <style jsx>{`
        .speed-slider {
          display: flex;
        }

        .speed-slider p {
          color: #148dbc;
        }
      `}</style>
      <input type="range" min="60" max="500" value="180" />
      <p>180 bpm</p>
    </div>
  );
}

export default SpeedSlider;
