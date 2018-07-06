import React from 'react';
import PropTypes from 'prop-types';
import SingleStoredBeat from './SingleStoredBeat';

function StoredBeats(props){
  return (
    <div className="stored-beats">
      <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet" />
      <style jsx>{`
        .stored-beats {
          margin-top: 350px;
        }

        .stored-beats h3{
          font-family: 'Oleo Script', cursive;
          font-size: 32px;
        }

        .beat-box {
          background-color: #6d6d6d;
          border-radius: 5px;
          padding: 4px;
          width: 510px;
        }

        @media screen and (max-width: 580px) {
          .beat-box {
            margin-top: -24px;
          }

          .stored-beats {
            margin-top: 190px;
          }
        }
      `}</style>
      <p>Developed by Brea Clark using React as a clone of the website http://drums.dojosto.com/ developed by Doug Johnston</p>
      <h3>Stored Beats</h3>
      <div className="beat-box">
        {props.storedBeats.map((storedBeat, index) =>
          <SingleStoredBeat beatName={storedBeat.beatName}
            key={index}/>
        )}
      </div>
    </div>
  );
}

StoredBeats.propTypes = {
  storedBeats: PropTypes.array
};

export default StoredBeats;
