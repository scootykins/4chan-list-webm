const listWebms = require('../')
const axios = require('axios')

axios.get('http://a.4cdn.org/wsg/threads.json')
  .then(function (res) {
    const url = 'http://boards.4chan.org/wsg/thread/' + res.data[0].threads[1].no + '.json'
    console.log(url)
    listWebms(url, function(data) {
      console.log(data)
    })
  })
  .catch(function (err) {
    console.log(err)
  })
