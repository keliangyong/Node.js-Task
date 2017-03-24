/*
 * @Author kely
 * 静态资源服务
 */
//express框架 app.use(static('public'))绝对路径
//DRY don't repeat yourself
const path = require('path')
const fs = require('fs')

let getPath = (url) => path.resolve(process.cwd(), 'public', `.${url}`)
let staticFunc = (url)=>{
	let map = {
		'/': '/index.html',
		'/about': '/abount.html',
		'/list': '/list.html'
	}
	let _url = map[url] || url
	let _path = getPath(_url)
	let body = ''
	try{
		body = fs.readFileSync(_path)
	}catch(error){
		body = `DATA NOT FOUND${error.stack}`
	}
	return body
};

module.exports = staticFunc
