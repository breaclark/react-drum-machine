import React from 'react';

function Header(){
  return (
    <div className="header">
      <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet" />
      <style jsx>{`
        .header h1 {
          font-family: 'Oleo Script', cursive;
          font-size: 60px;
        }
      `}</style>
      <h1>React Drum Machine Clone</h1>
    </div>
  );
}

export default Header;
