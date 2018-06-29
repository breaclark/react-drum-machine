import React from 'react';

function SingleKit(props){
  return (
    <div className="single-kit">
      <style jsx>{`
          .single-kit {
            background-color: #262626;
            border-radius: 100%;
            height: 30px;
            margin: 4px;
            margin-top: 0px;
            position: relative;
            width: 30px;
          }

          .single-kit h3 {
            position: absolute;
            top: -14px;
            right: 10px;
          }

          .single-kit p {
            display: none;
          }
      `}</style>
      <h3>{props.kitName}</h3>
      {props.sounds.map((soundObject, index) =>
        <p key={index}>{soundObject}</p>
      )}
    </div>
  );
}

export default SingleKit;
