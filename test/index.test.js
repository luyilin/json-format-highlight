import formatHighlight from '../src'

test('It works', () => {
  const out = formatHighlight({a: '11'})
  expect(out).toBe('{\n  <span style="color:dimgray">"a":</span> <span style="word-wrap:break-word;white-space:pre-wrap;color:lightcoral">"11"</span>\n}')
})

test('It works with html tags in field values', () => {
  const out = formatHighlight({a: 'this is <p>a paragraph</p>'})
  expect(out).toBe('{\n  <span style="color:dimgray">"a":</span> <span style="word-wrap:break-word;white-space:pre-wrap;color:lightcoral">"this is &lt;p&gt;a paragraph&lt;/p&gt;"</span>\n}')
})

test('It works with one double quote in field values', () => {
  const out = formatHighlight({a: 'this is a "'})
  expect(out).toBe('{\n  <span style="color:dimgray">"a":</span> <span style="word-wrap:break-word;white-space:pre-wrap;color:lightcoral">"this is a &quot;"</span>\n}')
})

test('It works with two double quotes in field values', () => {
  const out = formatHighlight({a: 'this is a "quote"'})
  expect(out).toBe('{\n  <span style="color:dimgray">"a":</span> <span style="word-wrap:break-word;white-space:pre-wrap;color:lightcoral">"this is a &quot;quote&quot;"</span>\n}')
})

test('It works with html tags and quotes in field values', () => {
  const out = formatHighlight({a: 'this is <p>a "p"</p>'})
  expect(out).toBe('{\n  <span style="color:dimgray">"a":</span> <span style="word-wrap:break-word;white-space:pre-wrap;color:lightcoral">"this is &lt;p&gt;a &quot;p&quot;&lt;/p&gt;"</span>\n}')
})

