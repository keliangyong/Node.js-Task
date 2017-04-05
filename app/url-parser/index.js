/*
 * url-parser模块 处理客户端参数
 * 输入request对象 输出context并挂载在request对象上 以便后续处理使用
*/
// context : query + body + method

module.exports = (request) => {
	let {method, url, context} = request
	context.method = method.toLowerCase()
	context.query = {}
	return Promise.resolve({
		then: (resolve,reject) => {
			if(context.method == 'post'){
				let data = ""
				request.on('data', (chunk) => {
					data += chunk
				}).on('end', () => {
					context.body = JSON.parse(data)
					resolve()
				})
			}else{
				resolve()
			}
		}
	})
} 