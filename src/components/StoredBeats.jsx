import React from 'react';
import SingleStoredBeat from './SingleStoredBeat';

function StoredBeats(){
  return (
    <div className="stored-beats">
      <style jsx>{`
        .stored-beats h3{
          font-family: 'Lobster', cursive;
        }
      `}</style>
      <h3>Stored Beat</h3>
      <SingleStoredBeat />
    </div>
  );
}
//put in a loop here to make some more of them
export default StoredBeats;
