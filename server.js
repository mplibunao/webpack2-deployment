const express = require('express');
const path = require('path');

const app = express();

// Server routes...
// Make sure to put the server routes above the webpack stuff
// or else you will never hit these routes
app.get('/hello', (req, res) => res.send({ hi: 'there' }))

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig =  require('./webpack.config.js')
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // Opens up dist folder
  app.use(express.static('dist'));

  // For browser history (react-router)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening'));
