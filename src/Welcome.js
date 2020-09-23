import React from "react";
import Music from "./Music";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div><b>Bem vindo ao Musify</b></div>
        <Music musicName="We are the world" musicAlbum="USA for Africa" />
        <Music musicName="We are the Champions" />
        <Music musicName="RG" musicAlbum="1977" />
        <Music />
      </div>
    );
  }
}

export default Welcome;