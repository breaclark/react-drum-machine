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
      playing: false,
      currentlyPlayingBeat: 0,
      currentlyPlaying: false,
      stopPlaying: false
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

  playBeat(i) {
    this.setState({
      currentlyPlayingBeat: i + 1,
      currentlyPlaying: true
    });
    if(i < this.state.currentBeat.length && this.state.stopPlaying === false) {
      for(let j=0; j<this.state.currentBeat[i].length; j++) {
        if (this.state.currentBeat[i][j].on) {
          let soundPlay = new Audio(this.state.currentBeat[i][j].sound);
          if (this.state.currentBeat[i][j].on) {
            soundPlay.play();
          }
        }
      }
      i = i + 1;
      setTimeout(() => {
        this.playBeat(i);
      }, (300)); //60000/this.bpmSlider
    } else if (i === this.state.currentBeat.length && this.state.stopPlaying === false) {
      this.playBeat(0);
    } else {
      this.setState({
        currentlyPlaying: false,
        stopPlaying: false
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
