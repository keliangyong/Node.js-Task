# Node.js-Task （Node.js项目 学习仓库）
> Node.js项目班 代码提交&学习记录
# 目录结构
```
    app                             // 主程序
        api                             // 处理ajax请求
        static-server                   // 处理静态资源请求
        url-parser                      // 解析url中的请求参数
        view-server                     // 返回页面模板
            ejs                             // ejs模板
                module                          // 模板公用部分
                index.ejs                       // 首页模板
                ...
            index.js                        // 模板处理js
        index.js                        // 核心逻辑 http server
    public                          // 静态资源
        build                           // webpack构建信息
            alias.js                        // 模块别名设置
            plugin_loader.js                // 插件设置
            webpack.config.js               // 配置文件
        js                              // 静态js资源
        css                             // 静态css资源
        img                             // 静态img资源
        .babelrc                        // babel配置
        package.json                    // webpack构建的相关包依赖
    test                            // 测试文件
    index.js                        // 主程序入口
    package.json                    // 包管理及依赖信息
```
# 学习过程
* 1. 创建一个简单的服务 http.createServer()
* 2. 增加静态资源返回（html css img）
* 3. 增加json数据返回 引入Promise（get请求）
* 4. 引入stream处理post请求 Promise串接各个服务
* 5. 学习Buffer Promise重构流式中间件
* 6. 学习ejs 使用webpack2构建前端
* 7. 构建动态路由 & 学习markdown 
