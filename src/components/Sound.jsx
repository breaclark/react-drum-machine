import React from 'react';
import PropTypes from 'prop-types';
import soundButton from './../assets/switch-off.png';

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
      `}</style>
      <img src={soundButton} alt="button" />
      <h5>{props.sound}</h5>
    </div>
  );
}

export default Sound;
