import React from 'react';

function Stop(){
  return (
    <div className="stop">
      <style jsx>{`
        .stop button {
          background-color: #ff410e;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          padding: 10px 20px;
          margin: 4px;
          width: 80px;
        }
      `}</style>
      <button>Stop</button>
    </div>
  );
}

export default Stop;
