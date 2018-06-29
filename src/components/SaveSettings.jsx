import React from 'react';

function SaveSettings(){
  return (
    <div className="save-settings">
      <style jsx>{`
        .save-settings button{
          background-color: #bfad37;
        }
      `}</style>
      <input type="text" placeholder="Enter name to save"/>
      <button>Save</button>
    </div>
  );
}

export default SaveSettings;
