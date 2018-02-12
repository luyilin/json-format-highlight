const defaultColors = {
  keyColor: 'dimgray',
  numberColor: 'lightskyblue',
  stringColor: 'lightcoral',
  trueColor: 'lightseagreen',
  falseColor: '#f66578',
  nullColor: 'cornflowerblue'
}

export default function (json, colorOptions = {}) {
  if (!json) return
  if (typeof json !== 'string') {
    json = JSON.stringify(json, null, 2)
  }
  let colors = Object.assign({}, defaultColors, colorOptions)
  console.log(colorOptions, colors)
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g, (match) => {
    let color = colors.numberColor
    if (/^"/.test(match)) {
      color = /:$/.test(match)
        ? colors.keyColor
        : colors.stringColor
    } else {
      color = /true/.test(match)
        ? colors.trueColor
        : /false/.test(match)
          ? colors.falseColor
          : /null/.test(match)
            ? colors.nullColor
            : color
    }
    return `<span style="color: ${color}">${match}</span>`
  })
}
