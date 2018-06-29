import React from 'react';

function SingleKit(props){
  return (
    <div>
      <h3>{props.kitName}</h3>
      {props.sounds.map((soundObject, index) =>
        <p key={index}>{soundObject}</p>
      )}
    </div>
  );
}

export default SingleKit;
