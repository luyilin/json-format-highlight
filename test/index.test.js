import formatHighlight from '../src'

test('It works', () => {
  const out = formatHighlight({a: '11'})
  expect(out).toBe('{\n  <span style="color: dimgray">"a":</span> <span style="color: lightcoral">"11"</span>\n}')
})
