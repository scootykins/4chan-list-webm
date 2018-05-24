/* global describe, it */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')
const listWebms = require('../')
const axios = require('axios')

function fetchDummyThread (board) {
  // .threads[0] could be a stickied thread, hence .threads[1]
  return axios.get(`http://a.4cdn.org/${board}/threads.json`)
    .then(res => res.data[0].threads[1])
}

function getThreadSubject (board, threadNo) {
  const apiUrl = `http://a.4cdn.org/${board}/thread/${threadNo}.json`

  return axios.get(apiUrl).then(res => res.data.posts[0].sub)
}

describe('/GET webm data from a thread', function () {
  it('should return a non-empty array', async function () {
    const board = 'wsg'
    const thread = await fetchDummyThread(board)
    const sub = await getThreadSubject(board, thread.no)

    const data = await listWebms(board, thread.no)
    const { subject, webms } = data

    expect(webms).to.be.an('array').that.is.not.empty
    expect(webms[0]).to.have.all.keys(['filename', 'url', 'thumbnail'])
    expect(subject).to.equal(sub)
  })

  it('should work with https', async function () {
    const board = 'wsg'
    const thread = await fetchDummyThread(board)
    const sub = await getThreadSubject(board, thread.no)

    const data = await listWebms(board, thread.no, { https: true })
    const { subject, webms } = data

    expect(webms).to.be.an('array').that.is.not.empty
    expect(webms[0]).to.have.all.keys(['filename', 'url', 'thumbnail'])
    expect(subject).to.equal(sub)
  })

  it('can handle undefined subjects', async function () {
    const board = 'b'
    const thread = await fetchDummyThread(board)

    const data = await listWebms(board, thread.no)
    const { subject, webms } = data

    // /b/ threads may not contain any webms
    expect(webms).to.be.an('array')
    expect(subject).to.equal(undefined)
  })
})
