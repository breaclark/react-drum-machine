import React from "react";
import Header from "./Header";

function App(){
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet" />
      <style jsx global>{`
        body {
          background-color: #383838;
        }
        * {
          font-family: 'Ubuntu Mono', monospace;
        }
      `}</style>
      <Header />
    </div>
  );
}

export default App;
