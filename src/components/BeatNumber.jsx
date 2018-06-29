import React from 'react';
import PropTypes from 'prop-types';

function BeatNumber(props){
  return (
    <div className="beat-number">
      <style jsx>{`
        .beat-number {
          margin-left: 20px;
        }

        @media screen and (max-width: 580px) {
          .beat-number {
            margin-left: 9px;
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
  number: PropTypes.number
};

export default BeatNumber;
