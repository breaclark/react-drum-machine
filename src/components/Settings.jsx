import React from 'react';
import PropTypes from 'prop-types';
import DrumKits from './DrumKits';
import SaveSettings from './SaveSettings';
import Play from './Play';
import Stop from './Stop';
import Clear from './Clear';
import SpeedSlider from './SpeedSlider';

function Settings(props){
  return (
    <div className="settings">
      <style jsx>{`
        .settings {
          display: flex;
          align-items: center;
        }
      `}</style>
      <DrumKits />
      <SaveSettings />
      <Play onPlayBeatPlay={props.onPlayBeat}/>
      <Stop onStopBeatStop={props.onStopBeat}/>
      <Clear onClearBeatClear={props.onClearBeat}/>
      <SpeedSlider
        onChangeBeatSpeedSlider={props.onChangeBeatSpeed}
        sliderCurrentSpeed={props.settingsCurrentSpeed}/>
    </div>
  );
}

Settings.propTypes = {
  settingsCurrentSpeed: PropTypes.number,
  onChangeBeatSpeed: PropTypes.func,
  onPlayBeat: PropTypes.func,
  onStopBeat: PropTypes.func,
  onClearBeat: PropTypes.func
};

export default Settings;
