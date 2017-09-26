import React, {Component} from 'react';

// const Gif = ({ giphyId, onGifClick }) => {

//   const url = `https://media.giphy.com/media/${giphyId}/giphy.gif`;

//   if (!giphyId) {
//     return <p>Loading...</p>;
//   }

//   return <img src={url} alt="" onClick={() => onGifClick(giphyId)}/>

//   };

// export default Gif;


class Gif extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.giphyId !== nextProps.giphyId;
  }

  render() {
    const url = `https://media.giphy.com/media/${this.props.giphyId}/giphy.gif`;

    if (!this.props.giphyId) {
      return <p>Loading...</p>;
    }

    return (
      <img
        src={url}
        alt=""
        className="gif"
        onClick={() => this.props.onGifClick(this.props.giphyId)}
      />
    );
  }
};

export default Gif;
