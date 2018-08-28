'use strict'

function webmUrl (protocol, board, timestamp) {
  return `${protocol}://i.4cdn.org/${board}/${timestamp}.webm`
}

function thumbUrl (protocol, board, timestamp) {
  return `${protocol}://i.4cdn.org/${board}/${timestamp}s.jpg`
}

function isWebm (file) {
  return file.ext === '.webm'
}

function transform (raw, protocol, board) {
  const reducer = (acc, file) => acc.concat([{
    filename: file.filename,
    url: webmUrl(protocol, board, file.tim),
    thumbnail: thumbUrl(protocol, board, file.tim)
  }])

  const payload = {
    webms: raw.posts.filter(isWebm).reduce(reducer, [])
  }

  if (raw.posts[0].sub) {
    payload.subject = raw.posts[0].sub
  }

  return payload
}

module.exports = transform
