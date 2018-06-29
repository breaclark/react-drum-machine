import React from 'react';
import DrumKits from './DrumKits';
import SaveSettings from './SaveSettings';
import Play from './Play';
import Stop from './Stop';
import Clear from './Clear';
import SpeedSlider from './SpeedSlider';

function Settings(){
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
      <Play />
      <Stop />
      <Clear />
      <SpeedSlider />
    </div>
  );
}

export default Settings;
