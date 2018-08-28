'use strict'

function parseUrl (url) {
  const regex = /(https?).*\/(.+)\/thread\/(\d+)/g
  let protocol
  let board
  let threadNo

  try {
    [, protocol, board, threadNo] = regex.exec(url)
  } catch (err) {
    throw new Error('Invalid 4chan URL!')
  }

  return {
    protocol,
    board,
    threadNo: Number.parseInt(threadNo)
  }
}

module.exports = parseUrl
