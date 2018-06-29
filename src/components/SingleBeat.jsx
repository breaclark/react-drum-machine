import React from "react";
import BeatNumber from "./BeatNumber";
import Kick from "./Kick";
import Snare from "./Snare";
import HHO from "./HHO";
import HHC from "./HHC";

function SingleBeat(){
  return (
    <div>
      <BeatNumber />
      <Kick />
      <Snare />
      <HHO />
      <HHC />
    </div>
  );
}

export default SingleBeat;
