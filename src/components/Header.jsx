import React from 'react';

function Header(){
  return (
    <div className="header">
      <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet" />
      <style jsx>{`
        .header h1 {
          font-family: 'Oleo Script', cursive;
          font-size: 60px;
          margin: 10px;
        }

        @media screen and (max-width: 580px) {
          .header h1 {
            font-size: 34px;
          }
        }
      `}</style>
      <h1>React Drum Machine Clone</h1>
    </div>
  );
}

export default Header;
