import React from 'react';
import SingleBeat from './SingleBeat';

function Beats(){
  const beats = [
  {
    beatNumber: 1,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 2,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 3,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 4,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 5,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 6,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 7,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 8,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 9,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 10,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 11,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 12,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 13,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 14,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 15,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  },
  {
    beatNumber: 16,
    sounds: [
      "kick.mp3",
      "snare.mp3",
      "hho.mp3",
      "hhc.mp3"
    ]
  }
];

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
          width: 900px;
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
      `}</style>
      <div className="instruments">
        <h5 className="kick">Kick</h5>
        <h5 className="snare">Snare</h5>
        <h5 className="hho">Hi-Hat (open)</h5>
        <h5 className="hhc">Hi-Hat (closed)</h5>
      </div>
      <div className="beat-block">
        {beats.map((beatObject, index) =>
          <SingleBeat beatNumber={beatObject.beatNumber}
            sounds={beatObject.sounds}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default Beats;
