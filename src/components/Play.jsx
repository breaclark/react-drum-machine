import React from 'react';

function Play(){
  return (
    <div className="play">
      <style jsx>{`
        .play button {
          background-color: #149356;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          padding: 10px 20px;
          margin: 4px;
          width: 80px;
        }
      `}</style>
      <button>Play</button>
    </div>
  );
}

export default Play;
