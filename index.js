/*
 * created by kely
 * 17 3/20
 */
//
const http = require('http')
const App = require('./app')
const PORT = 7000
const app = new App()

// 中间件
const urlParser = require('./app/url-parser')
const apiServer = require('./app/api')
const staticServer = require('./app/static-server')
const viewServer = require('./app/view-server')
const cookieParser = require('./app/cookie-parser')
app.use(cookieParser)
app.use(urlParser)
app.use(apiServer)
app.use(staticServer)
app.use(viewServer)

http.createServer(app.initServer()).listen(PORT, () => {
	console.log(`server listening on port ${PORT}`)
})// app.initServer() == (request, response) => { // todo }