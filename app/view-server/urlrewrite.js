/*
 * 网站页面路由 
*/

//  /:          博客首页        博客 + 个人展示
//  /list:      博客列表        博客分类 + 博客列表
//  /write:     写博客          分两屏 makedown编辑器 + 预览区
//  /about:     关于我          我的信息

const urlMap = {
    '/' : {
        viewName: 'index'
    },
    '/list' : {
        viewName: 'list'
    },
    '/write' : {
        viewName: 'write'
    },
    '/about' : {
        viewName: 'about'
    }
}
module.exports = urlMap