import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const renderList = () => {
    return props.gifs.map((gif) => {
        return <Gif key={gif.giphyId} giphyId={gif.giphyId} onGifClick={props.onGifClick}/>
      })
  };
  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;


