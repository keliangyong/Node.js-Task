/*
主要核心逻辑入口
*/

const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')

class App {
	constructor() {

	}
	initServer() {// process.cwd() 核心逻辑
		return (request, response) => {
			let { url } = request
			response.setHeader('X-powered-by', 'Node.js')
			apiServer(url)
			.then( data => {
				response.writeHead(200, 'ok', {'Content-Type': 'application/json'})
				response.end(JSON.stringify(data))
			})
			.catch( url => staticServer(url) )
			.then( fileData => response.end(fileData) )
			.catch( err => {
				response.writeHead(404, 'Not Found')
				response.end(`DATA NOT FOUND${err.stack}`) 
			})
		}
	}
}

module.exports = App

// var App = function(){}
// App.prototype.initServer = function(request, response){
// 	response.write('1,2,3')
// 	response.end('string')
// }