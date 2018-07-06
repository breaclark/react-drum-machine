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

  let audioRef = null;

  function onSoundClick() {
    audioRef.load();
    audioRef.play();
    // let audioPlayer = <HTMLVideoElement> document.getElementById("sound" + "-" + this.childSingleBeatIndex + "-" + soundIndex);
    // audioPlayer.load();
    // audioPlayer.play();
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
      <audio ref={(audio) => {audioRef = audio}}>
        <source src={props.sound} type="audio/mpeg" />
            Your browser does not support the audio element.
      </audio>
    </div>
  );
}

Sound.propTypes = {
  sound: PropTypes.string
};

export default Sound;
