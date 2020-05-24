#! /usr/bin/env node
/*
 * @Author: shh
 * @Date: 2020-01-08 09:10:43
 * @Last Modified by: shh
 * @Last Modified time: 2020-01-09 11:15:33
 * @Desc 拷贝模块配置文件
 */

const shell = require('shelljs')
const fs = require('fs')

const packageName = process.argv[2]
if (!packageName) {
  shell.echo('> Error: must provide a package!')
  shell.exit(1)
}

const copyPath = `../${packageName}`
shell.cp('-R', copyPath, './')