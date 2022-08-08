const { createProxyMiddleware } = require('http-proxy-middleware');

/*
Connects website to proxy middleware server. 
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
