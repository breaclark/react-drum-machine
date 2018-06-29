import React from "react";
import DrumKits from "./DrumKits";
import SaveSettings from "./SaveSettings";
import Play from "./Play";
import Stop from "./Stop";
import Clear from "./Clear";


function Settings(){
  return (
    <div>
      <p>Drum Kit</p>
      <DrumKits />
      <SaveSettings />
      <Play />
      <Stop />
      <Clear />
    </div>
  );
}

export default Settings;
