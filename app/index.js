/*
主要核心逻辑入口
*/

const fs = require('fs')
const path = require('path')

class App {
	constructor() {
		this.middlewareArr = []
		this.middlewareChain = Promise.resolve()
	}
	use(middleware){
		this.middlewareArr.push(middleware)
	}
	composeMiddleware(context){
		for(let middleware of this.middlewareArr){
			this.middlewareChain = this.middlewareChain.then(()=>{
				return middleware(context)
			})
		}
		return this.middlewareChain
	}
	initServer() {								// process.cwd() 核心逻辑
		return (request, response) => {
			response.setHeader('X-powered-by', 'Node.js')
			let context = {   					// 定义挂载对象 context
				req: request,
				reqCtx: {
					body: '', 					// post请求的数据
					query: {}, 					// 处理客户端的get请求
				},
				res: response,
				resCtx: {
					headers: {}, 				// response的返回报文
					body: '', 					// 返回给前端的内容
				}
			}
			this.composeMiddleware(context)
			.then(() => {
				response.writeHead(200, 'ok', context.resCtx.headers)
				response.end(context.resCtx.body)
			})
			.catch( err => {   					// 出错了 没找到文件
				response.writeHead(404, 'Not Found')
				response.end(`DATA NOT FOUND${err.stack}`) 
			})
		}
	}
}

module.exports = App