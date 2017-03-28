/*
 * @Author kely
 * 静态资源服务
 */
//express框架 app.use(static('public'))绝对路径
//DRY don't repeat yourself
const path = require('path')
const fs = require('fs')

let getPath = (url) => path.resolve(process.cwd(), 'public', `.${url}`)
let staticFunc = (url) => {
	return new Promise(function(reslove,reject){
		let map = {
			'/': '/index.html',
			'/about': '/abount.html',
			'/list': '/list.html'
		}
		let _url = map[url] || url
		let _path = getPath(_url)
		fs.readFile(_path, (err, data)=>{
			if(err){
				reject(`DATA NOT FOUND${err.stack}`)
			}
			reslove(data)
		})
	})
};

module.exports = staticFunc
