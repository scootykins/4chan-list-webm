const axios = require('axios')

function getWebmList (board, threadNo, callback, options) {
  options = options || {}
  
  const protocol = options.https ? 'https' : 'http'
  const apiUrl = `${protocol}://a.4cdn.org/${board}/thread/${threadNo}.json`
  
  const getWebmUrl = tim => `http://i.4cdn.org/${board}/${tim}.webm`
  const isWebm = x => x.ext === '.webm'
  const reducer = (acc, cur) => acc.concat([{filename: cur.filename, url: getWebmUrl(cur.tim)}])

  axios.get(apiUrl)
    .then(function (res) {
      callback(res.data.posts.filter(isWebm).reduce(reducer, []))
    })
    .catch(function (err) {
      console.log(err)
    })
}

module.exports = getWebmList
