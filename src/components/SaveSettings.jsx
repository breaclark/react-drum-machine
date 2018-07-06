import React from 'react';
import PropTypes from 'prop-types';

function SaveSettings(props){

  let beatName = null;
  function onSaveClick() {
    props.onSaveBeatSave(beatName.value);
  }

  return (
    <div className="save-settings">
      <style jsx>{`
        .save-settings {
          display: flex;
        }

        .save-settings input {
          color: black;
          font-size: 16px;
          height: 22px;
          margin-top: 8px;
          margin-right: 4px;
          margin-left: 4px;
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

        @media screen and (max-width: 580px) {
          .save-settings input {
            font-size: 10px;
            height: 16px;
          }

          .save-settings button{
            font-size: 12px;
            padding: 0px;
            margin: 2px;
            width: 40px;
          }

        }
      `}</style>
      <input ref={(input) => {beatName = input;}} type="text" placeholder="Enter name to save"/>
      <button onClick={onSaveClick}>Save</button>
    </div>
  );
}

SaveSettings.propTypes = {
  onSaveBeatSave: PropTypes.func
};

export default SaveSettings;
