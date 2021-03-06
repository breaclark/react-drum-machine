import React from 'react';
import PropTypes from 'prop-types';

function Stop(props){
  return (
    <div className="stop">
      <style jsx>{`
        .stop button {
          background-color: #ff410e;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          padding: 10px 20px;
          margin: 4px;
          width: 80px;
        }

        @media screen and (max-width: 580px) {
          .stop button{
            font-size: 12px;
            padding: 8px 0px;
            margin: 2px;
            width: 40px;
          }
        }
      `}</style>
      <button onClick={props.onStopBeatStop}>Stop</button>
    </div>
  );
}

Stop.propTypes = {
  onStopBeatStop: PropTypes.func
};

export default Stop;
