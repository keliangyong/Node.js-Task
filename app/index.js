/*
	主要核心逻辑入口
 */

const fs = require('fs')

class App {
	constructor(){

	}
	initServer() {
		// process.cwd()
		// 初始化工作 
		let pack = require('../package')
		return (request, response) => {
			// 核心逻辑
			fs.readFile('./public/index.html', 'utf8', (error, data) => {
				response.end(JSON.stringify(pack))
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