# json-format-highlight

[![NPM version](https://img.shields.io/npm/v/json-format-highlight.svg?style=flat)](https://npmjs.com/package/json-format-highlight) [![NPM downloads](https://img.shields.io/npm/dm/json-format-highlight.svg?style=flat)](https://npmjs.com/package/json-format-highlight) [![CircleCI](https://circleci.com/gh/luyilin/json-format-highlight/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/json-format-highlight/tree/master)

[DEMO](https://luyilin.github.io/json-format-highlight/example/dist/)

[![Edit luyilin/json-format-highlight: codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/luyilin/json-format-highlight/tree/master/example/codesandbox)

Snapshot

<img width="350" src="https://user-images.githubusercontent.com/12069729/36086981-87bbd074-100a-11e8-904f-5614f59a5a88.png">

## Introduction

Format json and highlight it as well.

* Really tiny
* No dependency to other library
* Handles HTML tags within field values
* Handles quotes and other special characters within field values
* Styling is self-contained, no need to setup CSS

Note:

* May not be suitable for handling huge (such as 10MB) JSON.

## Install

```bash
yarn add json-format-highlight --save
```

CDN: [UNPKG](https://unpkg.com/json-format-highlight@latest/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/json-format-highlight@latest/dist/)

## Usage

### In Node.js

```js
import formatHighlight from 'json-format-highlight'

formatHighlight(json, colorOptions)
```

### In HTML

```html
<html>
    <head>
            <script src="//code.jquery.com/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
            <script src="//unpkg.com/json-format-highlight@1.0.1/dist/json-format-highlight.js" type="text/javascript" charset="utf-8"></script>
    </head>
    <body>
        <p>
            You can pass the URL in query parameter <code>url</code> of this page,
            then the JSON data would be fetched from that URL and displayed below:
        </p>
        <script>
            function getParameterByName(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                    results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
            $(function(){
                $.ajax(
                    {
                        'url': getParameterByName('url'),
                        type: 'GET',
                        dataType: 'json',
                        error: function(jqXHR, textStatus, error) {
                            var errMsg = '' + textStatus + ' (' + error + ')'
                            document.write('<pre>\n' + errMsg + '\n</pre>')
                        },
                        success: function(data, textStatus, jqXHR) {
                            var formatted = jsonFormatHighlight(data)
                            document.write('<pre>\n' + formatted + '\n</pre>')
                        }
                    }
                );
            })
        </script>
    </body>
</html>
```

## Option

### colorOptions

Type: `object`

Fields:

|Option|Type|Default|Desc|
|---|---|---|---|
|keyColor|string|```dimgray```|Key color|
|numberColor|string|```lightskyblue```|Color of the value of the number type|
|stringColor|string|```lightcoral```|Color of the value of the string type|
|trueColor|string|```lightseagreen```|Color of the value of the boolean type and equals to true|
|falseColor|string|```#f66578```|Color of the value of the string type and equals to false|
|nullColor|string|```cornflowerblue```|Color of the value of the null type|

If you don't pass in anything this argument, default colors would be used. If you do pass in an object for this argument,
the colors you specified would override the default color scheme.

Feel free to use your own exclusive color scheme! :D

Below is an example color scheme that many people may like:

```js
customColorOptions = {
    keyColor: 'black',
    numberColor: 'blue',
    stringColor: '#0B7500',
    trueColor: '#00cc00',
    falseColor: '#ff8080',
    nullColor: 'cornflowerblue'
};
```

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
