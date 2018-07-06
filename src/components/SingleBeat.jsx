import React from 'react';
import BeatNumber from './BeatNumber';
import Sound from './Sound';
import PropTypes from 'prop-types';

function SingleBeat(props){
  return (
    <div>
      <BeatNumber number={props.beatNumber}/>
      {props.sounds.map((soundObject, index) =>
        <Sound sound={soundObject.sound}
          on={soundObject.on}
          key={index}/>
      )}
    </div>
  );
}

SingleBeat.propTypes = {
  beatNumber: PropTypes.number,
  sounds: PropTypes.array
};

export default SingleBeat;
