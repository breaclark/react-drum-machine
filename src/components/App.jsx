import React from 'react';
import Header from './Header';
import Settings from './Settings';
import Beats from './Beats';
import StoredBeats from './StoredBeats';
import kick from './../assets/kick.mp3';
import snare from './../assets/snare.mp3';
import hho from './../assets/high-hat-open.mp3';
import hhc from './../assets/high-hat-closed.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeat: [
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}]
        ],
      playing: false
    };
    this.playBeat = this.playBeat.bind(this);
    this.manipulateSoundOnBeat = this.manipulateSoundOnBeat.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  // saveBeat
  // stopBeat
  // clearBeat
  // changeBeatSpeed
  // loadStoredBeat

  playBeat () {
    for (let i=0; i<3; i++) {
      let singleBeat = this.state.currentBeat[i];
      singleBeat.forEach((soundObject) => {
        let soundPlay = new Audio(soundObject.sound);
        if (soundObject.on) {
          soundPlay.play();
        }
      });
    }
  }


  manipulateSoundOnBeat (singleBeat, sound) {
    let newCurrentBeat = this.state.currentBeat.slice();
    if (newCurrentBeat[singleBeat][sound]['on']) {
      newCurrentBeat[singleBeat][sound]['on'] = false;
    } else {
      newCurrentBeat[singleBeat][sound]['on'] = true;
    }
    this.setState({
      currentBeat: newCurrentBeat
    });
  }

  playSound (singleBeat, sound) {
    let audioRef = new Audio(this.state.currentBeat[singleBeat][sound]['sound']);
    audioRef.load();
    audioRef.play();
  }



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
        <Settings onPlayBeat={this.playBeat}/>
        <Beats
          beats={this.state.currentBeat}
          onBeatsChange={this.manipulateSoundOnBeat}
          onPlaySoundBeats={this.playSound}/>
        <StoredBeats />
      </div>
    );
  }
}

export default App;
