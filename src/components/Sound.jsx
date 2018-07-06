import React from 'react';
import offSoundButton from './../assets/switch-off.png';
import onSoundButton from './../assets/switch-on.png';
import PropTypes from 'prop-types';

function Sound(props){
  let soundButton = null;
  if (props.on) {
    soundButton = onSoundButton;
  } else {
    soundButton = offSoundButton;
  }

  function onSoundClick() {
    props.onSoundChange(props.beatNumber - 1, props.soundNumber);
    props.onPlaySound(props.beatNumber - 1, props.soundNumber);
  }

  return (
    <div className="sound">
      <style jsx>{`
          .sound {
            margin: 30px 4px;
          }

          img {
            width: 40px;
          }

          @media screen and (max-width: 580px) {
            .sound {
              margin: 14px 4px;
            }

            img {
              width: 20px;
            }
          }
      `}</style>
      <img onClick={onSoundClick} src={soundButton} alt="button" />
      <audio>
        <source src={props.sound} type="audio/mpeg" />
            Your browser does not support the audio element.
      </audio>
    </div>
  );
}

Sound.propTypes = {
  on: PropTypes.bool,
  sound: PropTypes.string,
  beatNumber: PropTypes.number,
  soundNumber: PropTypes.number,
  onSoundChange: PropTypes.func,
  onPlaySound: PropTypes.func
};

export default Sound;
