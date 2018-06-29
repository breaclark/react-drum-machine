import React from 'react';
import BeatNumber from './BeatNumber';
import Sound from './Sound';
import PropTypes from 'prop-types';

function SingleBeat(props){
  return (
    <div>
      <BeatNumber number={props.beatNumber}/>
        {props.sounds.map((soundObject, index) =>
          <Sound sound={soundObject}
            key={index}/>
        )}
    </div>
  );
}

export default SingleBeat;
