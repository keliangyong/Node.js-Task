const path = require('path')
const ejs = require('ejs')

const html = `hello
    <% if(world.match('x')){ %>
        <%- world %>
        <%- include('test') %>
    <% } %>
    <%= hhh %>`

const f1 = ejs.compile(html, {
    filename: path.resolve(__filename)
}) // 将字符串转化为function
console.log(path.resolve(__filename))

const finalStr = f1({ 
    world: 'kelyx', 
    hhh:'<script>alert(1)</script>'
})
console.log(finalStr)

// <% %> 逻辑运算
// <%- %> unescape
// <%= %> escape