import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import {Howl} from "howler"

const audioClips=[
  {'sound':'https://drive.google.com/uc?export=download&id=1rmwX9MXU4xZbQx4d45XH37QS3wdQPehF','label':'Raftara'},
  {'sound':"https://drive.google.com/uc?export=download&id=1Nst9xNcYXQ3qOr7UPhCKW4JbEvmxXt4z",'label':'Bad Wolves'}
]
class App extends Component {
  soundPlay =(src)=>{
    const sound=new Howl({
      src,
      html5:true
    })
    sound.play()
  }
  RenderButtonSound=()=>{
    return audioClips.map((soundObj,index)=>{
      return(
        <button key={index} onClick={(()=>{this.soundPlay(soundObj.sound)})}>
          {soundObj.label}
        </button>
      )
    })
  }
  render() {
    return (
      <div className="App">
        {this.RenderButtonSound()}
      </div>
    );
  }
}

export default App;
