import React from 'react';
import SpotifyPlaylistButtons from './SpotifyPlaylistButtons';
import './compospoty.css';

const Compospoty = () => {
  const playlists = [
    { name: 'Red Hot Chili Peppers en Costa Rica', link: 'https://open.spotify.com/playlist/6OfjnAV06vHO722R1ZaxE8?si=5ee18e1bbde94b42' },
    { name: 'Feid En Costa Rica', link: 'https://open.spotify.com/playlist/6lqWOwvLRGWFHKbkXmaKvu?si=3451dfa940ac4c43' },
    { name: 'Picnic Festival', link: 'https://open.spotify.com/playlist/7j5sLmvHCylpruNRtQEfpv?si=a64133eeecbd4cba' },
    { name: 'Otras Playlists', link: 'https://open.spotify.com/user/backstagemagazinecr?si=a18dad6bbcc346e3&nd=1' },
  ];

  return (
    <div className="row godlike">
     
      <div className="col-1"></div> {/* Col-1 antes de la parte de "Nuestras playlists de Spotify" */}
      <div className="col-10 statik">
        <h1 className="title">Nuestras playlists de Spotify</h1>
        <div className="playlist-container">
          <SpotifyPlaylistButtons playlists={playlists} />
        </div>
      </div>
      
    </div>
  );
};

export default Compospoty;