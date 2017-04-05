/*
主要核心逻辑入口
*/

const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')

class App {
	constructor() {

	}
	initServer() {// process.cwd() 核心逻辑
		return (request, response) => {
			request.context = { // 定义挂载对象 context
				method: 'get',
				query: {},
				body: ''
			}
			response.setHeader('X-powered-by', 'Node.js')

			urlParser(request)
			.then(val => {
				return apiServer(request)
			})
			.then(val => {
				let ret = val ? val : staticServer(request.url)
				return ret
			})
			.then(val => {
				if(val instanceof Buffer){
					response.end(val)
				}else{
					response.writeHead(200, 'ok', {'Content-Type': 'application/json'})
					response.end(JSON.stringify(val))
				}
			})
			.catch( err => {
				response.writeHead(404, 'Not Found')
				response.end(`DATA NOT FOUND${err.stack}`) 
			})
		}
	}
}

module.exports = App