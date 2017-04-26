/*
* view-server
* @Author kely
*/
// 映射表
// ejs动态

const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const mime = require('mime')
const urlMap = require('./urlrewrite')

module.exports = (ctx) => {
    let { req, resCtx } = ctx
    let { url } = req
    return Promise.resolve({
        then: (resolve, reject) => {
            let viewPath = path.resolve(__dirname, 'ejs')
            if (resCtx.body) {
                resolve()
            } else if (urlMap[url]) {
                let { viewName } = urlMap[url]
                let layoutPath = path.resolve(viewPath, './layout.ejs')
                let render = ejs.compile(fs.readFileSync(layoutPath, 'utf8'), {
                    compileDebug: true,
                    filename: layoutPath
                })
                resCtx.headers = Object.assign(resCtx.headers, {
                    'Content-Type': 'text/html'
                })
                resCtx.body = render({
                    templateName: viewName,
                    isMaster: resCtx.isMaster
                })
                resolve()
            } else {
                resCtx.headers = Object.assign(resCtx.headers, {
                    'Location': '/'
                })
                resCtx.statusCode = 302
                resCtx.statusMessage = 'redirect'
                resolve()
            }
        }
    })
}