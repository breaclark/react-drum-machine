import React from 'react';
import PropTypes from 'prop-types';

function SingleStoredBeat(props){

  function onLoadClick() {
    props.onLoadStoredBeatList(props.beat);
  }

  return (
    <div className="single-stored-beat">
      <style jsx>{`
        .single-stored-beat {
          display: flex;
        }

        .single-stored-beat button {
          background-color: #c66f20;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          height: 34px;
          padding: 10px 20px;
          margin: 4px;
          width: 70px;
        }

        .single-stored-beat h4 {
          margin-top: 10px;
          margin-left: 10px;
        }

        @media screen and (max-width: 580px) {
          .single-stored-beat button {
            font-size: 12px;
            height: 18px;
            padding: 2px 10px;
            margin: 2px;
            width: 44px;
          }

          .single-stored-beat h4 {
            font-size: 12px;
            margin-top: 6px;
          }
        }
      `}</style>
      <button onClick={onLoadClick}>Load</button>
      <h4>{props.beatName}</h4>
    </div>
  );
}

SingleStoredBeat.propTypes = {
  beatName: PropTypes.string,
  beat: PropTypes.array,
  onLoadStoredBeatList: PropTypes.func
};

export default SingleStoredBeat;
