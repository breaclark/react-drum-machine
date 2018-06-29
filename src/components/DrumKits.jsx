import React from 'react';
import SingleKit from './SingleKit';

function DrumKits(){
  const kits = [
    {
      kitName: 'A',
      sounds: [
        'kick1.mp3',
        'snare1.mp3',
        'hho1.mp3',
        'hhc1.mp3'
      ]
    },
    {
      kitName: 'B',
      sounds: [
        'kick2.mp3',
        'snare2.mp3',
        'hho2.mp3',
        'hhc2.mp3'
      ]
    },
    {
      kitName: 'C',
      sounds: [
        'kick3.mp3',
        'snare3.mp3',
        'hho3.mp3',
        'hhc3.mp3'
      ]
    }
  ];

  return (
    <div className="drum-kits">
      <style jsx>{`
          .drum-kits {
            margin-top: -34px;
          }

          p {
            margin-left: 24px;
            margin-bottom: 6px;
          }

          .kit-block {
            align-items: center;
            display: flex;
            margin-top: 0px;
          }
      `}</style>
      <p>Drum Kit</p>
      <div className="kit-block">
        {kits.map((soundObject, index) =>
          <SingleKit kitName={soundObject.kitName}
            sounds={soundObject.sounds}
            key={index}/>
        )}
      </div>
    </div>
  );
}
export default DrumKits;
