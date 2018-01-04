const listWebms = require('../')
const axios = require('axios')

axios.get('http://a.4cdn.org/wsg/threads.json')
  .then(function (res) {
    const threadNo = res.data[0].threads[1].no
    listWebms('wsg', threadNo, function(data) {
      console.log(data)
    })
  })
  .catch(function (err) {
    console.log(err)
  })
