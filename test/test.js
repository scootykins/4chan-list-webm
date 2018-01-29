const { expect } = require('chai')
const listWebms = require('../')
const axios = require('axios')

describe('/GET webm data from a thread', function () {
  it('Should return a non-empty array', function () {
    axios.get('http://a.4cdn.org/wsg/threads.json')
      .then(res => res.data[0].threads[1].no)
      .then(threadNo => listWebms('wsg', threadNo))
      .then(data => expect(data).to.be.an('array').that.is.not.empty)
      .catch(console.error)
  })
})
