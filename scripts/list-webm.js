#!/usr/bin/env node

const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const transform = require('../lib/transform')
const files = require('../test/data')
const flatten = require('array-flatten')

const writeFile = promisify(fs.writeFile)

const absolutePath = relative => path.join(__dirname, relative)

;(async () => {
  console.log('Generating expected output (please confirm correctness)')

  const promises = Object.keys(files).map((name, i) => {
    const protocols = ['http', 'https']

    return protocols.map((protocol) => {
      const out = absolutePath(`../test/expected/${protocol}-${name}-thread.json`)
      const contents = JSON.stringify(
        transform(files[name].json, protocol, files[name].board),
        null,
        2
      )

      return writeFile(out, contents, 'utf8')
    })
  })

  Promise.all(flatten(promises))
    .then(() => console.log('Done!'))
})()
