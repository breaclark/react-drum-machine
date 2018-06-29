import React from 'react';

function SingleStoredBeat(props){
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
      `}</style>
      <button>Load</button>
      <h4>{props.beatName}</h4>
    </div>
  );
}

export default SingleStoredBeat;
