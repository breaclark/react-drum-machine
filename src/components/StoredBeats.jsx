import React from 'react';
import SingleStoredBeat from './SingleStoredBeat';

function StoredBeats(){
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
      `}</style>
      <h3>Stored Beats</h3>
      <SingleStoredBeat />
    </div>
  );
}
//put in a loop here to make some more of them
export default StoredBeats;
