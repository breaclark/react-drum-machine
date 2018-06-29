import React from "react";
import Header from "./Header";
import Settings from "./Settings";
import Beat from "./Beat";
import StoredBeats from "./StoredBeats";

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
          color: white;
        }
      `}</style>
      <Header />
      <Settings />
      <Beat />
      <StoredBeats />
    </div>
  );
}

export default App;
