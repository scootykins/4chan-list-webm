const axios = require('axios')

function getWebmList (url, callback, options) {
  options = options || {}
  
  const protocol = options.https ? 'https' : 'http'
  
  const parsedUrl = /http:\/\/boards.4chan.org\/(.*)\/thread\/(.*)\.json/.exec(url)
  const [, board, threadNo] = parsedUrl

  const apiUrl = (b, t) => `${protocol}://a.4cdn.org/${b}/thread/${t}.json`
  const getWebmUrl = tim => `http://i.4cdn.org/wsg/${tim}.webm`
  const isWebm = x => x.ext === '.webm'
  const reducer = (acc, cur) => acc.concat([{filename: cur.filename, url: getWebmUrl(cur.tim)}])

  axios.get(apiUrl(board, threadNo))
    .then(function (res) {
      callback(res.data.posts.filter(isWebm).reduce(reducer, []))
    })
    .catch(function (err) {
      console.log(err)
    })
}

module.exports = getWebmList
