# 4chan-list-webm

Given a board and thread number, returns a `Promise` with an array of objects containing the filename, video and thumbnail URLs **_of all webm files in the thread_**.

Here's a little [demonstration](http://www.4webm.org/) of `4chan-list-webm`, http://4webm.org, in action (plz star).

### UPDATE 3.0.0 BREAKING CHANGE

`4chan-list-webm` now returns a `Promise`. See "Usage" for an example.

## Installation

```bash
$ yarn add 4chan-list-webm

# OR

$ npm install --save 4chan-list-webm
```


## Usage


```js
const listWebms = require('4chan-list-webm')

// Consider the following URL: http://boards.4chan.org/wsg/thread/2045456
// The board is 'wsg' and the thread number is 2045456
// Note: This thread will likely 404 by the time you see this

listWebms('wsg', 2045456).then(function (webms) {
  console.log(webms)
})
```

The data looks like this:
```json
[{ "filename": "1478018951860",
    "url": "http://i.4cdn.org/wsg/1514757619690.webm",
    "thumbnail": "http://i.4cdn.org/wsg/1514757619690s.jpg" },
 { "filename": "1505294337138",
    "url": "http://i.4cdn.org/wsg/1514834417503.webm",
    "thumbnail": "http://i.4cdn.org/wsg/1514834417503s.jpg" }]
```


## API

**listWebm(board, threadNo, options)**
* board (`string`): The board the thread is in (if you have good taste, then it'll likely `/wsg/`)
* threadNo (`number`): The thread number
* options (`object`): An options object, see below for more information
* **return** `Promise`


## Options

| Option  | Description                | Type    |
|---------|----------------------------|---------|
| https   | Use https instead of http  | Boolean |


## Miscellaneous

### CORS, and why this doesn't work in the browser

Because CORS [is only supported](https://github.com/4chan/4chan-API/issues/35) with an origin of `http(s)://boards.4chan.org`,
this module **does not work in the browser; it only works with Node.js**.

### Rate limits

*As stated in the [4chan API](https://github.com/4chan/4chan-API), you must ensure that you do not make more than one request per second. It is __your__ responsiblity to ensure that the request limit is respected. I recommend using [limiter](https://www.npmjs.com/package/limiter) or [bottleneck](https://www.npmjs.com/package/bottleneck).*

### Thumbnails

You will get an `403 Forbidden error` if you try to load the thumbnails via inline linking (eg. changing the `src` attribute of an `<img>` via JavaScript, or hard-coding it). You can still download these images via a proxy server and serve them there.


## Why? 

¯\\\_(ツ)\_/¯


## Disclaimer

The creator of `4chan-list-webm` is not associated with 4chan.org in any way.
