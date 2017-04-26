/** 
 * cookie parser
*/
const cookie_parser = require('cookie')
const whiteNameList = ['/saber']
module.exports = (ctx) => {
	let { req, resCtx, res } = ctx
    let { url } = req
	let { cookie } = req.headers || ""
    let cookieObj = cookie_parser.parse(cookie || "")
	return Promise.resolve({
		then: (resolve, reject) => {
            if(cookieObj['auth']){
                resCtx.isMaster = true
                res.setHeader('Set-Cookie', cookieStr(3600))
            }
            let cookieStr = time => `auth=true;Max-Age=${time}`
            if(whiteNameList.includes(url)){
                // Object.assign(resCtx.headers, {'Set-Cookie':cookieStr})
                res.setHeader('Set-Cookie', cookieStr(3600))
            }
            if(url.match('logout')){
                res.setHeader('Set-Cookie', cookieStr(0))
            }
            resolve()
		}
	})
} 