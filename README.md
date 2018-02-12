# json-format-highlight

[![NPM version](https://img.shields.io/npm/v/json-format-highlight.svg?style=flat)](https://npmjs.com/package/json-format-highlight) [![NPM downloads](https://img.shields.io/npm/dm/json-format-highlight.svg?style=flat)](https://npmjs.com/package/json-format-highlight) [![CircleCI](https://circleci.com/gh/luyilin/json-format-highlight/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/json-format-highlight/tree/master)

[DEMO](https://luyilin.github.io/json-format-highlight/example/dist/)

[![Edit luyilin/json-format-highlight: codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/luyilin/json-format-highlight/tree/master/example/codesandbox)

Snapshot

<img width="300" src="https://user-images.githubusercontent.com/12069729/36086732-f0a54202-1008-11e8-8d4e-23ec574b3db4.png">

## Introduction

Format json and highlight it as well.

## Install

```bash
yarn add json-format-highlight --save
```

CDN: [UNPKG](https://unpkg.com/json-format-highlight@latest/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/json-format-highlight@latest/dist/)

## Usage

```js
import formatHighlight from 'json-format-highlight'

formatHighlight(json, colorOptions)
```

## Option

### colorOptions

Type: `object`<br>
Default: `{}`

Define your exclusive color scheme :D

You can set the key and types of value of the json to custom colors.

|Option|Type|Default|Desc|
|---|---|---|---|
|keyColor|string|```dimgray```|Key color|
|numberColor|string|```lightskyblue```|Color of the value of the number type|
|stringColor|string|```lightcoral```|Color of the value of the string type|
|trueColor|string|```lightseagreen```|Color of the value of the boolean type and equals to true|
|falseColor|string|```#f66578```|Color of the value of the string type and equals to false|
|nullColor|string|```cornflowerblue```|Color of the value of the null type|


## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
