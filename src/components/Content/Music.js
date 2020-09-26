import React from "react";

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let musicName = null;
    if(this.props.musicName) {
      musicName = (<p>Nome da Música: {this.props.musicName}</p>);
    }

    return (
      <div>
        { musicName }
        { this.props.musicAlbum && <p>Nome do álbum: {this.props.musicAlbum}</p> }
        { (!this.props.musicAlbum && !this.props.musicName) && 
          <p>Poxa, você não passou nada :(</p>
        }
      </div>
    );
  }
}

export default Music;