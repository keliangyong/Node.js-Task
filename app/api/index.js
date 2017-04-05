/*
 * api 服务 
 * 根据url请求的方法 返回数据
*/

let apiServer = (request) => {
	let ret
	let {url,context} = request
	if(context.method == 'get'){
		let road = url.split("?")[0]
		let apiMap = {
			'/user.action': ['张三','李四','王五'],
			'/list.action': ['卖 肥皂','卖 节操','卖 滑稽']
		}
		ret = road in apiMap ?　apiMap[road] : ""
	}else{
		ret = context.body
	}
	
	return Promise.resolve(ret)
}

module.exports = apiServer