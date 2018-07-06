import React from 'react';
import BeatNumber from './BeatNumber';
import Sound from './Sound';
import PropTypes from 'prop-types';

function SingleBeat(props){
  return (
    <div>
      <BeatNumber number={props.beatNumber}/>
      {props.sounds.map((soundObject, index) =>
        <Sound
          onPlaySound={props.onPlaySoundSingleBeat}
          onSoundChange={props.onSingleBeatChange}
          on={soundObject.on}
          beatNumber={props.beatNumber}
          soundNumber={index}
          key={index}/>
      )}
    </div>
  );
}

SingleBeat.propTypes = {
  beatNumber: PropTypes.number,
  sounds: PropTypes.array,
  onSingleBeatChange: PropTypes.func,
  onPlaySoundSingleBeat: PropTypes.func
};

export default SingleBeat;
