const PROXY_CONFIG = {
  '/api/hds': {
    /****** Connect to API Server *****/
    // target': 'http://10.253.146.201:7080',

    /****** Connect to Mock API Server *****/
    'target': 'http://localhost:4001',

    'secure': false,
    'changeOrigin': true,
    'pathRewrite': {
      '^/api/pcm': '/pcm'
    },
    'bypass': function (req, res, proxyOptions) {
      // Intercept request
      /*req.headers['X-Epsilon-User-ID'] = '59b03622c9e77c000144db2d';
      req.headers['X-OUID'] = 'c80b1186-5cdd-47b1-ae4b-8d0c3cb62a02';
      req.headers['Content-Type'] = 'application/json';*/
    }
  }
};

module.exports = PROXY_CONFIG;
