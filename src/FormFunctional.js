import React, { useState } from "react";

const FormFunctional = () => {
  const [musicName, setMusicName] = useState("");
  const [musicAlbum, setMusicAlbum] = useState("");

  const onMusicNameChange = (event) => {
    const music = event.target.value;
    setMusicName(music);
  };

  const onMusicAlbumChange = (event) => {
    const album = event.target.value;
    setMusicAlbum(album);
  };

  return (
    <div>
      <form>
        <input
          name="musicName"
          placeholder="Nome da música"
          type="text"
          value={musicName}
          onChange={onMusicNameChange}
        />
        <input
          name="musicAlbum"
          placeholder="Nome do álbum"
          type="text"
          value={musicAlbum}
          onChange={onMusicAlbumChange}
        />
      </form>
      <button>Enviar</button>
      {musicName}
      {musicAlbum}
    </div>
  );
};

export default FormFunctional;
