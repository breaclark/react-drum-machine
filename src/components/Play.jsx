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

        @media screen and (max-width: 580px) {
          .play button{
            font-size: 12px;
            padding: 8px 0px;
            margin: 2px;
            width: 40px;
          }
        }
      `}</style>
      <button>Play</button>
    </div>
  );
}

export default Play;
