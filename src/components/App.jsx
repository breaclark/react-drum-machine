import React from "react";
import Header from "./Header";
import Settings from "./Settings";
import Beats from "./Beats";
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
      <Beats />
      <StoredBeats />
    </div>
  );
}

export default App;
