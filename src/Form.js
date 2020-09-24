import React from "react";

class Form extends React.Component {
  state = {
    musicName: "",
    musicAlbum: "",
  };

  onMusicNameChange = (event) => {
    const music = event.target.value;
    this.setState({ musicName: music });
  };

  onMusicAlbumChange = (event) => {
    const music = event.target.value;
    this.setState({ musicAlbum: music });
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="musicName"
            placeholder="Nome da música"
            type="text"
            value={this.state.musicName}
            onChange={this.onMusicNameChange}
          />
          <input
            name="musicAlbum"
            placeholder="Nome do álbum"
            type="text"
            value={this.state.musicAlbum}
            onChange={this.onMusicAlbumChange}
          />
        </form>
        <button>Enviar</button>
        {this.state.musicName}
        {this.state.musicAlbum}
        {this.state.exemplo}
      </div>
    );
  }
}

export default Form;
