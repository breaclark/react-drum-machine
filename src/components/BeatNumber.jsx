import React from 'react';
import PropTypes from 'prop-types';

function BeatNumber(props){
  return (
    <div className="beat-number">
      <style jsx>{`
        .beat-number {
          margin-left: 10px;
          padding: 0px 9px;
          width: 14px;
          ${ props.number === props.currentlyPlayingBeat ?
      `background-color: #149356;
            border-radius: 4px;` : ''
    }
        }

        @media screen and (max-width: 580px) {
          .beat-number {
            margin-left: 9px;
            padding: 0px 2px;
            width: 4px;
          }

          h5 {
            font-size: 10px;
          }
        }
      `}</style>
      <h5>{props.number}</h5>
    </div>
  );
}

BeatNumber.propTypes = {
  number: PropTypes.number,
  currentlyPlayingBeat: PropTypes.number
};

export default BeatNumber;
