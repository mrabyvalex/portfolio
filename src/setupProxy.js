const proxy = require('http-proxy-middleware');

module.exports = (app, LAMBDA_PORT) => {
  app.use(
    proxy('/.netlify/functions/', {
      target: `http://localhost:${LAMBDA_PORT}/`,
      pathRewrite: {
        '^/\\.netlify/functions': ''
      }
    })
  );
};
