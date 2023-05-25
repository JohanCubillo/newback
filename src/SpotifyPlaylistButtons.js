import React from 'react';
import MyImage from './spoti.png';
import './SpotifyPlaylistButtons.css';

const SpotifyPlaylistButtons = ({ playlists }) => {
  return (
    <div className="center-container">
      <div className="row">
        <div className="col-1"></div> {/* Col-1 al inicio */}
        <div className="col-10">
         
            <div className="text-container">
              <div className="row">
                <div className="col-5">
                  <h2 className="title">Disfruta de las mejores playlist en Spotify con BackStage Magazine</h2>
                </div>
                <div className="col-7">
                  <div className="button-container">
                    {playlists.map((playlist, index) => (
                      <a key={index} href={playlist.link} target="_blank" rel="noopener noreferrer">
                        <button className="playlist-button">
                          <img
                            src="https://icones.pro/wp-content/uploads/2021/04/icone-spotify-noir.png" // Agrega la URL de tu propio icono de Spotify
                            alt="Spotify Icon"
                            className="spotify-icon"
                          />
                          <span>{playlist.name}</span>
                        </button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        <div className="col-1"></div> {/* Col-1 al final */}
      </div>
    </div>
  );
};

export default SpotifyPlaylistButtons;