// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import Gif from './components/gif';
import GifList from './components/gif_list';
import SearchBar from './components/search_bar';
import App from './components/app';

// internal modules
import '../assets/stylesheets/application.scss';


// render an instance of the component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

