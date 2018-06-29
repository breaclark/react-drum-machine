import React from 'react';
import BeatNumber from './BeatNumber';
import Sound from './Sound';

function SingleBeat(){
  return (
    <div>
      <BeatNumber />
      <Sound />
    </div>
  );
}
//make a loop so that you have 4 sounds per single beat, different sounds
export default SingleBeat;
