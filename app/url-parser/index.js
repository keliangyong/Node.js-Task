/*
 * url-parser模块 处理客户端参数
 * 输入request对象 输出context并挂载在request对象上 以便后续处理使用
*/

module.exports = (ctx) => {
	let { method, url } = ctx.req
	method = method.toLowerCase()
	return Promise.resolve({
		then: (resolve,reject) => {
			if(method == 'post'){
				let data = ""
				ctx.req.on('data', (chunk) => {
					data += chunk
				}).on('end', () => {
					ctx.reqCtx.body = JSON.parse(data)
					resolve()
				})
			}else{
				resolve()
			}
		}
	})
} 