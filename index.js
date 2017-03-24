/*
 * created by kely
 * 17 3/20
 */
//
const http = require('http')
const App = require('./app')
const PORT = 7000
const app = new App()

http.createServer(app.initServer()).listen(PORT, () => {
	console.log(`server listening on port ${PORT}`)
})// app.initServer() == (request, response) => { // todo }