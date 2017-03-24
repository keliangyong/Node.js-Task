/*
主要核心逻辑入口
*/

const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')

class App {
	constructor() {

	}
	initServer() {// process.cwd()
		return (request, response) => {
			// 核心逻辑
			let { url } = request
			let responseData = staticServer(url)
			response.end(responseData)
		}
	}
}

module.exports = App

// var App = function(){}
// App.prototype.initServer = function(request, response){
// 	response.write('1,2,3')
// 	response.end('string')
// }