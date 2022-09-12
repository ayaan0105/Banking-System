import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const t0 = performance.now();

function renderCallback(e) {
  console.log("Rendering done?", e);
  const t1 = performance.now();

  console.log(`Mount took ~${(t1 - t0) / 1000} seconds.`);
}

ReactDOM.render(
  <App/>,
  
  document.getElementById('root'),renderCallback
);


