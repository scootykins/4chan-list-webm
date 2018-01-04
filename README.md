# 4chan-list-webm

Given a board and thread number, returns an array of objects containing the filename and URL of every webm.
Here's a little [demonstration](http://x4chan-webm-player.herokuapp.com/) of `4chan-list-webm` in action.

Because CORS [is only supported](https://github.com/4chan/4chan-API/issues/35) with an origin of `http(s)://boards.4chan.org`,
this module **does not work in the browser; it only works with Node.js**.


### Update 2.0.0

Breaking changes:
* Now requires arguments `board` and `threadNo` (thread number) instead of `url`


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

// Consider the following URL: http://boards.4chan.org/wsg/thread/2045456
// The board is 'wsg' and the thread number is 2045456
// Note: This thread will likely 404 by the time you see this

listWebms('wsg', 2045456, function (webms) {
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


## Disclaimer

The creator of `4chan-list-webm` is not associated with 4chan.org in any way.
