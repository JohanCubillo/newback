import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LastFmComponent = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchNewAlbums = async () => {
      try {
        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=new&api_key=93566b4a8fff13a8430eaa854426e203&format=json`
        );
        const albumData = response.data.albums.album;
        setAlbums(albumData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNewAlbums();
  }, []);

  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h1>Last.fm New Albums</h1>
      <div>
        {albums.map((album) => (
          <div key={album.name} className="album-card">
            <h3>{album.name}</h3>
            <p>Artist: {album.artist.name}</p>
            <p>Released: {formatReleaseDate(album.releasedate)}</p>
            <img src={album.image[2]['#text']} alt="Album Cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastFmComponent;