const assert = require('assert')
// 断言

// 学习 Buffer.from
// 1. (string,encodeing)
const encodeingTest = 'hello world'
let buf1 = Buffer.from(encodeingTest, 'utf8')
console.log(buf1)

let buf2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64])
console.log(buf2.toString())

let test = `窗`
assert.equal(Buffer.from([0xe7,0xaa,0x97]).toString('utf8'),test)

let buf3 = Buffer.from([0xe7])
let buf4 = Buffer.from([0xaa])
let buf5 = Buffer.from([0x97])
console.log(Buffer.concat([buf3,buf4,buf5],3).toString())

const fs = require('fs')
let data = fs.createReadStream('./test/tmp', {
    highWaterMark: 1,
})
let out = []
data.on('data', (chunk)=>{
    out.push(chunk)
}).on('end',()=>{
    console.log(Buffer.concat(out).toString())
})
