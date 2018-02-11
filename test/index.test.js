import formatHighlight from '../src'

test('It works', () => {
  const out = formatHighlight({a: '11'})
  // expect(out).toBe('<span style="color: #eb6161">"a":</span> <span style="color: #397c79">"11"</span>')
})
