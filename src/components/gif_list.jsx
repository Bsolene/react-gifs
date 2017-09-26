import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, onGifClick } ) => {
  const renderList = () => {
    return gifs.map(({ giphyId }) => {
        return <Gif key={giphyId} giphyId={giphyId} onGifClick={onGifClick}/>
      })
  };
  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;


