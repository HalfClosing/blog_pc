module.exports = {
  indexPath: './public/index.html',
  outputDir: '../public/dist',
  publicPath: '/',
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
  },
  configureWebpack: {
    watch: true
  }
};