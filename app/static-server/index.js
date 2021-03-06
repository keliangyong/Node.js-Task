/*
 * @Author kely
 * 静态资源服务
 */
//express框架 app.use(static('public'))绝对路径
//DRY don't repeat yourself
const path = require('path')
const fs = require('fs')
const mime = require('mime')

let getPath = (url) => path.resolve(process.cwd(), 'public', `.${url}`)
let staticFunc = (ctx) => {
	let { req, resCtx } = ctx
	let { url } = req
	return new Promise((resolve, reject) => {
		if(!url.match('action') && url.match(/\./)){
			let _path = getPath(url)
			resCtx.headers = Object.assign(resCtx.headers,{
				'Content-Type':mime.lookup(_path)
			})
			fs.readFile(_path, (err, data)=>{
				if(err){
					resCtx.statusCode = 404
					resCtx.statusMessage = 'Not Found'
					resCtx.body = `DATA NOT FOUND ${err.stack}`
				}else{
					resCtx.body = data
				}
				resolve()
			})		
		}else{
			resolve()
		}
	})
};

module.exports = staticFunc
