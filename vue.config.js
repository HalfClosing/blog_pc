module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8000/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/login': {
        target: 'http://localhost:8000/login/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/'
        }
      }
    }
  }
};