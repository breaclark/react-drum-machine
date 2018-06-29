import React from 'react';

function SaveSettings(){
  return (
    <div className="save-settings">
      <style jsx>{`
        .save-settings {
          display: inline;
        }
        .save-settings button{
          background-color: #bfad37;
          border: none;
          border-radius: 5px;
          color: #eae8e8;
          font-size: 16px;
          padding: 10px 20px;
          margin: 4px;
          width: 80px;
        }
      `}</style>
      <input type="text" placeholder="Enter name to save"/>
      <button>Save</button>
    </div>
  );
}

export default SaveSettings;
