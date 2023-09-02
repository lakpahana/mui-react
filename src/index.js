import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Blog from './Blog/Blog'
import Home2 from './HomePageWithAppBar';
import App2 from './Home22';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Blog/> */}
    {/* <App/>  */}
    {/* <Home2 /> */}
    <App2/>
  </React.StrictMode>
);

