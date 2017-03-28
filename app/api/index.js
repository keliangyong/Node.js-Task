/*
 * api 服务
*/

let apiServer = (url) => {
	let road = url.split("?")[0]
	let apiMap = {
		'/user.action': ['张三','李四','王五'],
		'/list.action': ['卖 肥皂','卖 节操','卖 滑稽']
	}
	return new Promise(function(reslove, reject){
		if(road in apiMap){
			reslove(apiMap[road])
		}else{
			reject(url)
		}
	})
}

module.exports = apiServer