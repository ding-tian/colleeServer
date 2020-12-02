const express = require('express')
// 创建 web 服务器
const app = express()
// 开启gzip
const compression = require('compression')
// 启用中间件
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))
// 启动 web 服务器
app.listen(8848, () => {
  console.log('web server running at http://127.0.0.1:8848')
})
