import React from 'react';
import Header from './Header';
import Settings from './Settings';
import Beats from './Beats';
import StoredBeats from './StoredBeats';
import kick from './../asssets/kick.mp3';
import snare from './../asssets/snare.mp3';
import hho from './../asssets/high-hat-open.mp3';
import hhc from './../asssets/high-hat-closed.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeat: [
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}],
        [{"sound": kick, "on": false}, {"sound": snare, "on": false}, {"sound": hho, "on": false}, {"sound": hhc, "on": false}]
      ];
      playing: false;
    };
  }

  // saveBeat
  //
  // playBeat
  //
  // stopBeat
  //
  // clearBeat
  //
  // changeBeatSpeed

  addSoundToBeat (singleBeat, sound) {

  }

  // loadStoredBeat

  render () {
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
        <Beats this.state.currentBeat = {beats}/>
        <StoredBeats />
      </div>
    );
  }
}

export default App;
