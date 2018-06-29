import React from "react";

function Header(){
  return (
    <div className="header">
      <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
      <style jsx>{`
        .header h1 {
          color: white;
          font-family: 'Lobster', cursive;
        }
      `}</style>
      <h1>React Drum Machine Clone</h1>
      <p>Test text</p>
    </div>
  );
}

export default Header;
