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

          h5 {
            display: none;
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
      <img src={soundButton} alt="button" />
      <h5>{props.sound}</h5>
    </div>
  );
}

Sound.propTypes = {
  sound: PropTypes.string
};

export default Sound;
