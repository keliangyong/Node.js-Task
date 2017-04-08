/*
 * @Author kely
 * 静态资源服务
 */
//express框架 app.use(static('public'))绝对路径
//DRY don't repeat yourself
const path = require('path')
const fs = require('fs')

let getPath = (url) => path.resolve(process.cwd(), 'public', `.${url}`)
let staticFunc = (ctx) => {
	let { req, resCtx } = ctx
	let { url } = req
	return new Promise(function(resolve, reject){
		if(!url.match('action')){
			let map = {
				'/': '/index.html',
				'/about': '/abount.html',
				'/list': '/list.html'
			}
			let _url = map[url] || url
			let _path = getPath(_url)
			fs.readFile(_path, (err, data)=>{
				if(err){
					resCtx.body = `DATA NOT FOUND${err.stack}`
				}
				resCtx.body = data
				resolve()
			})		
		}else{
			resolve()
		}
	})
};

module.exports = staticFunc
