/*
 * api 服务 
 * 根据url请求的方法 返回数据
 */

 let apiServer = (ctx) => {
 	let ret
	let { req, reqCtx, resCtx } = ctx
 	let { method, url } = req
 	method = method.toLowerCase()
 	if(url.match('action')){
		resCtx.headers = Object.assign(resCtx.headers, {'Content-Type':'application/json'})
 		if(method == 'get'){
 			let road = url.split("?")[0]
 			let apiMap = {
 				'/user.action': ['张三','李四','王五'],
 				'/list.action': ['卖 肥皂','卖 节操','卖 滑稽']
 			}
 			ret = road in apiMap ?　JSON.stringify(apiMap[road]) : ""
 		}else{
 			ret = JSON.stringify(reqCtx.body)
 		}
 		resCtx.body = ret
 	}
 	return Promise.resolve()
 }

 module.exports = apiServer