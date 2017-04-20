/*
 * url-parser模块 处理客户端参数
 * 输入request对象 输出context并挂载在request对象上 以便后续处理使用
*/

module.exports = (ctx) => {
	let { req, reqCtx } = ctx
	let { method, url } = req
	method = method.toLowerCase()
	return Promise.resolve({
		then: (resolve, reject) => {
			if(method == 'post'){
				let data = []
				req.on('data', (chunk) => {
					data.push(chunk)
				}).on('end', () => {
					bufferData = Buffer.concat(data)
					try{
						reqCtx.body = JSON.parse(bufferData)
					}catch(e){}
					resolve()
				})
			}else{
				resolve()
			}
		}
	})
} 