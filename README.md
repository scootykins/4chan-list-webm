# 4chan-list-webm

Given a thread URL, returns an array of objects containing the filename and URL of every webm.

Because CORS [is only supported](https://github.com/4chan/4chan-API/issues/35) with an origin of `http(s)://boards.4chan.org`,
this module **does not work in the browser; it only works in Node.js**


## Installation

```bash
# yarn
$ yarn add 4chan-list-webm

# npm
$ npm install 4chan-list-webm --save
```


## Usage


```js
const listWebms = require('4chan-list-webm')

// Note: This thread will likely 404 by the time you see this
const threadUrl = 'http://boards.4chan.org/wsg/thread/1959335'

listWebms(threadUrl, function (webms) {
  console.log(webms)
})
```

The data looks like this:
```json
[{ "filename": "1478018951860",
    "url": "http://i.4cdn.org/wsg/1514757619690.webm" },
 { "filename": "1505294337138",
    "url": "http://i.4cdn.org/wsg/1514834417503.webm" }]
```


## Options

| Option  | Description                | Type    |
|---------|----------------------------|---------|
| https   | Use https instead of http  | Boolean |



## Why? 

¯\\\_(ツ)\_/¯
