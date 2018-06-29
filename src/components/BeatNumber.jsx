import React from 'react';
import PropTypes from 'prop-types';

function BeatNumber(props){
  return (
    <div className="beat-number">
      <style jsx>{`
        .beat-number {
          margin-left: 20px;
        }
      `}</style>
      <h5>{props.number}</h5>
    </div>
  );
}

export default BeatNumber;
