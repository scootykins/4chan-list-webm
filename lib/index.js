const axios = require('axios')

function getWebmList (board, threadNo, options) {
  options = options || {}

  const protocol = options.https ? 'https' : 'http'
  const apiUrl = `${protocol}://a.4cdn.org/${board}/thread/${threadNo}.json`

  const getWebmUrl = tim => `${protocol}://i.4cdn.org/${board}/${tim}.webm`
  const getThumbUrl = tim => `${protocol}://i.4cdn.org/${board}/${tim}s.jpg`
  const isWebm = x => x.ext === '.webm'
  const reducer = (acc, cur) => acc.concat([{
    filename: cur.filename,
    url: getWebmUrl(cur.tim),
    thumbnail: getThumbUrl(cur.tim)
  }])

  return axios.get(apiUrl)
    .then(res => ({
      subject: res.data.posts[0].sub,
      webms: res.data.posts.filter(isWebm).reduce(reducer, [])
    }))
}

module.exports = getWebmList
