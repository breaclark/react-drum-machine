import React from 'react';
import PropTypes from 'prop-types';

function SpeedSlider(props){
  let sliderValue = null;

  function onSpeedSliderChange() {
    props.onChangeBeatSpeedSlider(parseInt(sliderValue.value));
  }

  return (
    <div className="speed-slider">
      <style jsx>{`
        .speed-slider {
          display: flex;
        }

        .speed-slider p {
          color: #148dbc;
        }

        @media screen and (max-width: 580px) {
          .speed-slider p{
            font-size: 12px;
          }
        }
      `}</style>
      <input type="range" min="60" max="500" value={props.sliderCurrentSpeed}
        ref={(input) => {sliderValue = input;}}
        onChange={onSpeedSliderChange}/>
      <p>{props.sliderCurrentSpeed} bpm</p>
    </div>
  );
}

SpeedSlider.propTypes = {
  sliderCurrentSpeed: PropTypes.number,
  onChangeBeatSpeedSlider: PropTypes.func
};

export default SpeedSlider;
