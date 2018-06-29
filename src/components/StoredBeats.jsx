import React from 'react';
import SingleStoredBeat from './SingleStoredBeat';

function StoredBeats(){
  const storedBeats = [
    {
      beatName: "one two three four"
    },
    {
      beatName: "test 2"
    },
    {
      beatName: "boom chh"
    },
    {
      beatName: "Best song ever"
    },
  ];
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
          width: 500px;
        }
      `}</style>
      <h3>Stored Beats</h3>
      <div className="beat-box">
        {storedBeats.map((storedBeat, index) =>
          <SingleStoredBeat beatName={storedBeat.beatName}
            key={index}/>
        )}
      </div>
    </div>
  );
}
//put in a loop here to make some more of them
export default StoredBeats;
