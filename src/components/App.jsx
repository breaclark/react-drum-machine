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
      currentlyPlayingBeat: 0,
      currentlyPlaying: false,
      stopPlaying: false,
      currentSpeed: 180,
      storedBeatList: []
    };
    this.loadStoredBeat = this.loadStoredBeat.bind(this);
    this.saveBeat = this.saveBeat.bind(this);
    this.changeBeatSpeed = this.changeBeatSpeed.bind(this);
    this.playBeat = this.playBeat.bind(this);
    this.stopBeat = this.stopBeat.bind(this);
    this.clearBeat = this.clearBeat.bind(this);
    this.manipulateSoundOnBeat = this.manipulateSoundOnBeat.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  loadStoredBeat(storedBeat) {
    let storedBeatCopy = JSON.parse(JSON.stringify(storedBeat));
    this.setState({
      currentBeat: storedBeatCopy
    });
  }

  saveBeat(beatName) {
    let newStoredBeatList = this.state.storedBeatList.slice();
    let currentBeatCopy = this.state.currentBeat.slice();
    let newStoredBeat = {
      'beatName' : beatName,
      'beat' :  currentBeatCopy
    };
    newStoredBeatList.push(newStoredBeat);
    this.setState({
      storedBeatList: newStoredBeatList
    });
    this.clearBeat();
  }

  changeBeatSpeed(newSpeed) {
    this.setState({
      currentSpeed: newSpeed
    });
  }

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
      }, (60000/this.state.currentSpeed));
    } else if (i === this.state.currentBeat.length && this.state.stopPlaying === false) {
      this.playBeat(0);
    } else {
      this.setState({
        currentlyPlaying: false,
        stopPlaying: false
      });
    }
  }

  stopBeat() {
    this.setState({
      stopPlaying: true
    });
  }

  clearBeat() {
    this.setState({
      currentBeat: [[{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}],
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
        [{'sound': kick, 'on': false}, {'sound': snare, 'on': false}, {'sound': hho, 'on': false}, {'sound': hhc, 'on': false}]]
    });
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
        <Settings
          onSaveBeat={this.saveBeat}
          onPlayBeat={this.playBeat}
          onStopBeat={this.stopBeat}
          onClearBeat={this.clearBeat}
          onChangeBeatSpeed={this.changeBeatSpeed}
          settingsCurrentSpeed={this.state.currentSpeed}/>
        <Beats
          currentlyPlayingBeat={this.state.currentlyPlayingBeat}
          beats={this.state.currentBeat}
          onBeatsChange={this.manipulateSoundOnBeat}
          onPlaySoundBeats={this.playSound}/>
        <StoredBeats
          onLoadStoredBeat={this.loadStoredBeat}
          storedBeats={this.state.storedBeatList}/>
      </div>
    );
  }
}

export default App;
