import formatHighlight from '../src'

test('main', () => {
  const out = formatHighlight(`{a: '11'}`)
  expect(out).toBe('<span style="color: #23AC69">co</span>')
})
