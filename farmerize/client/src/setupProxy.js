const { createProxyMiddleware } = require('http-proxy-middleware');

/*
Contains code connecting website to proxy middleware server.
*/

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8629',
      changeOrigin: true,
    })
  );
};
