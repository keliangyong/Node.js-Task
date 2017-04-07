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
			let context = {   // 定义挂载对象 context
				req: request,
				reqCtx: {
					body: '', // post请求的数据
					query: {}, // 处理客户端的get请求
				},
				res: response,
				resCtx: {
					headers: {}, // response的返回报文
					body: '', // 返回给前端的内容
				}
			}
			response.setHeader('X-powered-by', 'Node.js')

			urlParser(context) // 处理post传来的数据 挂载在 request.context.body上
			.then(val => {
				return apiServer(context) // 处理ajax请求
			})
			.then(val => {
				let ret = context.resCtx.body ? context.resCtx.body : staticServer(context) // 有值 => 进入下一步；若没有值，说明不是ajax请求 => 进入静态文件请求处理
				return ret
			})
			.then(val => {
				if(context.resCtx.body instanceof Buffer){ // 是buffer类型 => 直接返回；若不是，说明是是json数据，写明Content-Type、json序列化后返回
					response.end(context.resCtx.body)
				}else{
					response.writeHead(200, 'ok', {'Content-Type': 'application/json'})
					response.end(JSON.stringify(context.resCtx.body))
				}
			})
			.catch( err => {   // 出错了 没找到文件
				response.writeHead(404, 'Not Found')
				response.end(`DATA NOT FOUND${err.stack}`) 
			})
		}
	}
}

module.exports = App