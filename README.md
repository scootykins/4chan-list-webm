# 4chan-list-webm

[![npm version](https://badge.fury.io/js/4chan-list-webm.svg)](https://badge.fury.io/js/4chan-list-webm)
[![Build Status](https://travis-ci.org/scootykins/4webm.svg?branch=master)](https://travis-ci.org/scootykins/4webm)
[![Coverage Status](https://coveralls.io/repos/github/scootykins/4chan-list-webm/badge.svg?branch=master)](https://coveralls.io/github/scootykins/4chan-list-webm?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=4chan-list-webm)](https://packagephobia.now.sh/result?p=4chan-list-webm)

Generate a list of webms posted in a thread.

Here's a little [demonstration](https://www.4webm.org/) of `4chan-list-webm` in action (plz star).

## Installation

```bash
$ yarn add 4chan-list-webm

# OR

$ npm install --save 4chan-list-webm
```

## Usage

```js
const listWebms = require('4chan-list-webm')

// promise
listWebms('wsg', 2045456)
  .then(data => console.log(data.webms))
  .catch(err => console.error('404!', err))

// async/await
async function run () {
  try {
    const data = await listWebms('http://boards.4chan.org/wsg/thread/2045456')
    console.log(data)
  } catch (err) {
    console.error('Whoa! 404! :c', err)
  }
}

run()
```

## API

#### listWebm(url)

#### listWebm(board, threadNo, config)

Returns a promise that resolves to data about webms within a thread (see payload).

#### url

Type: `String`

The URL of the thread. The thumbnail and webm links will use `https` if an `https` request is made.

#### board

Type: `String`

The short-name of the board, eg. `'wsg'`, `'b'`, etc.

#### threadNo

Type: `Number`

The thread number of the target thread. For example, `2312676` is the thread number of http://boards.4chan.org/wsg/thread/2312676

#### config

Type: `Object`

A configuration object, see details below.

#### config.https

Type: `Boolean`

Property that determines whether to use `https`. Setting the key to `true` enables `https`.

## Payload

Below an example payload. Note that the subject key will be omitted if the thread has no subject.

```json
{
  "subject": "Hawkeye being epic in other roles",
  "webms": [
    {
      "filename": "1534288775634",
      "url": "http://i.4cdn.org/wsg/1534332395477.webm",
      "thumbnail": "http://i.4cdn.org/wsg/1534332395477s.jpg"
    },
    {
      "filename": "1534288802449",
      "url": "http://i.4cdn.org/wsg/1534332452014.webm",
      "thumbnail": "http://i.4cdn.org/wsg/1534332452014s.jpg"
    },
    {
      "filename": "1534288878879",
      "url": "http://i.4cdn.org/wsg/1534332526405.webm",
      "thumbnail": "http://i.4cdn.org/wsg/1534332526405s.jpg"
    },
    {
      "filename": "Dahmer (2002)",
      "url": "http://i.4cdn.org/wsg/1534799616292.webm",
      "thumbnail": "http://i.4cdn.org/wsg/1534799616292s.jpg"
    },
    {
      "filename": "Bourne_legacy",
      "url": "http://i.4cdn.org/wsg/1535117894788.webm",
      "thumbnail": "http://i.4cdn.org/wsg/1535117894788s.jpg"
    }
  ]
}
```

## Miscellaneous

#### CORS, and why this doesn't work in the browser

Because CORS [is only supported](https://github.com/4chan/4chan-API/issues/35) with an origin of `http(s)://boards.4chan.org`,
this module **does not work in the browser; it only works with Node.js**. The **ONLY** exception to this is if you're creating a Chrome plugin, with `http(s)://boards.4chan.org` set as the origin.

#### Rate limits

*As stated in the [4chan API](https://github.com/4chan/4chan-API), you must ensure that you do not make more than one request per second. It is __your__ responsiblity to ensure that the request limit is respected. I recommend using [limiter](https://www.npmjs.com/package/limiter) or [bottleneck](https://www.npmjs.com/package/bottleneck).*

#### Thumbnails

You will get an `403 Forbidden error` if you try to load the thumbnails via inline linking (eg. changing the `src` attribute of an `<img>` via JavaScript, or hard-coding it). You can still download these images via a proxy server and serve them there.

## Why? 

¯\\\_(ツ)\_/¯

## Disclaimer

The creator of `4chan-list-webm` is not associated with 4chan.org in any way.
