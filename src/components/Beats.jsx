import React from 'react';
import PropTypes from 'prop-types';
import SingleBeat from './SingleBeat';

function Beats(props){

  return (
    <div className="beats">
      <style jsx>{`
        .beats {
          height: 600px;
          position: absolute;
        }

        .instruments h5{
          background-color: #6d6d6d;
          border-radius: 5px;
          height: 12px;
          padding: 20px;
          position: absolute;
          width: 862px;
          z-index: -1;
        }

        .instruments .kick {
          top: 38px;
        }

        .instruments .snare {
          top: 111px;
        }

        .instruments .hho {
          top: 184px;
        }

        .instruments .hhc {
          top: 257px;
        }

        .beat-block {
          display: flex;
          margin-left: 130px;
        }

        @media screen and (max-width: 580px) {
          .beats {
            height: 300px;
          }

          .instruments h5{
            background-color: #6d6d6d;
            border-radius: 5px;
            font-size: 8px;
            height: 10px;
            padding: 10px;
            position: absolute;
            width: 500px;
            z-index: -1;
          }

          .instruments .kick {
            top: 25px;
          }

          .instruments .snare {
            top: 62px;
          }

          .instruments .hho {
            top: 99px;
          }

          .instruments .hhc {
            top: 136px;
          }

          .beat-block {
            display: flex;
            margin-left: 68px;
          }
        }
      `}</style>
      <div className="instruments">
        <h5 className="kick">Kick</h5>
        <h5 className="snare">Snare</h5>
        <h5 className="hho">Hi-Hat (open)</h5>
        <h5 className="hhc">Hi-Hat (closed)</h5>
      </div>
      <div className="beat-block">
        {props.beats.map((beatObject, index) =>
          <SingleBeat
            onSingleBeatChange = {props.onBeatsChange}
            beatNumber={index + 1}
            sounds={beatObject}
            key={index}/>
        )}
      </div>
    </div>
  );
}

Beats.propTypes = {
  beats: PropTypes.array,
  onBeatsChange : PropTypes.func
};

export default Beats;
