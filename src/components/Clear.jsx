import React from 'react';

function Clear(){
  return (
    <div className="clear">
      <style jsx>{`
        .clear button {
          background-color: #148dbc;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          padding: 10px 20px;
          margin: 4px;
          width: 80px;
        }
      `}</style>
      <button>Clear</button>
    </div>
  );
}

export default Clear;
