// let's go!
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../public/css/skeleton.css';


const Root = () => {
  return (
      <div>
        <App />
      </div>
    )
}

render(<Root/>, document.querySelector('#main'));
