import React from 'react';
import soundButton from './../assets/switch-off.png';
import PropTypes from 'prop-types';

function Sound(props){
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
      {/* This image should change based on if sound is on or off
      Also it should make a sound when pressed */}
      <img src={soundButton} alt="button" />
      <audio>
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
