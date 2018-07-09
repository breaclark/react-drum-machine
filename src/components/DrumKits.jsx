import React from 'react';
import PropTypes from 'prop-types';
import SingleKit from './SingleKit';

function DrumKits(props){
  const kits = [
    {
      kitName: 'A'
    },
    {
      kitName: 'B'
    },
    {
      kitName: 'C'
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

          @media screen and (max-width: 580px) {
            p {
              font-size: 10px;
            }
          }
      `}</style>
      <p>Drum Kit</p>
      <div className="kit-block">
        {kits.map((soundObject, index) =>
          <SingleKit
            onChangeSingleDrumKit={props.onChangeKitDrumKit}
            kitName={soundObject.kitName}
            key={index}/>
        )}
      </div>
    </div>
  );
}

DrumKits.propTypes = {
  onChangeKitDrumKit: PropTypes.func
};


export default DrumKits;
