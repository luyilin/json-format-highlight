const defaultColors = {
  key: 'dimgray',
  number: 'lightskyblue',
  string: 'lightcoral',
  boolean: 'lightseagreen',
  null: 'cornflowerblue'
}

export default function (json) {
  if (!json) return
  if (typeof json !== 'string') {
    json = JSON.stringify(json, undefined, 2)
  }
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g, (match) => {
    let color = defaultColors.number
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        color = defaultColors.key
      } else {
        color = defaultColors.string
      }
    } else if (/true|false/.test(match)) {
      color = defaultColors.boolean
    } else if (/null/.test(match)) {
      color = defaultColors.null
    }
    return `<span style="color: ${color}">${match}</span>`
  })
}
