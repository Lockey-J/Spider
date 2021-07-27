/*
author  : 寒菱
date    : 2020/8/11
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./ddj.js", {
    encoding: "utf-8"
});
let ast = parse(jscode);

const visitor =
    {
        StringLiteral(path)
        {
            path.get('extra').remove();
        },
    }

//some function code


traverse(ast,visitor);
let {code} = generator(ast, {jsescOption:{"minimal":true}});
fs.writeFileSync('./after.js', code,{
    encoding :'utf-8'
})
