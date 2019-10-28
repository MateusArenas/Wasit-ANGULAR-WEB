const proxy = [
    {
      target: 'http://localhost:5002/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;