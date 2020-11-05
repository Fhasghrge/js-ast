#!/usr/bin/env node 

const recast = require('recast')

// 读取外部文件，并转换成AST， 通过printSource打印出源代码方便调试
recast.run( function(ast, printSource){
  printSource(ast)
})