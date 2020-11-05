#!/usr/bin/env node 

const recast = require('recast')

recast.run(function (ast, printSource) {
  recast.visit(ast, {
    // visitExpressionStatement: function({node}) {
    //   printSource(node)
    //   console.log('---------------')
    //   console.log(node)
    //   return false
    // },
    visitFunctionDeclaration: function({node}) {
      printSource(node)
      console.log('+++++++')
      console.log(node)
      return false
    }
  })
})