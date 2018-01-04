const axios = require('axios')
const listWebms = require('../')
const $ = x => document.querySelector(x)

const $entry = $('#entry')
const $urlField = $('#url-from-thread')

$('#url-from-thread').addEventListener('click', () => {
  const url = $urlField.value
  listWebms(url, (data) => {
    $entry.value = JSON.stringify(data)
  })
})

$('#random-thread').addEventListener('click', () => {
  axios.get('http://a.4cdn.org/wsg/threads.json', { 
    crossDomain: true,
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': 'http://boards.4chan.org' }
  })
    .then(function (res) {
      console.log(res.data)
      const url = `http://boards.4chan.org/wsg/thread/${res.data[0].threads[1].no}.json`
      console.log(url)
      listWebms(url, function(data) {
        $entry.value = JSON.stringify(data)
      })
    })
    .catch(function (err) {
      console.log(err)
    })
})
