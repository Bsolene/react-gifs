import React, {Component} from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';


const API_KEY = "PWte0ndhmRhhdfDEE6L8RDNmMZ5380R8";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null
    };
  }

  searchGifs = (term) => {
    giphy(API_KEY).search(term, (err, response) => {
      if (response && response.data && response.data.length > 0) {
        this.setState({
          gifs: response.data.slice(0, 10).map(gif => ({ giphyId: gif.id }))
        });
      }
    });
  }

  clickGif = (giphyID) => {
    this.setState({
      selectedGif: giphyID
    });
  }

  render (){
    return (
      <div>
        <div className="main-scene">
          <SearchBar handleChange={this.searchGifs}/>
          <div className="main-frame">
            <Gif giphyId={this.state.selectedGif}/>
          </div>
        </div>
        <div className="list-container">
          <GifList gifs={this.state.gifs} onGifClick={this.clickGif}/>
        </div>
      </div>
    );
  }
};


export default App;


