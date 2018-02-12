<template>
  <div id="app">
    <pre><code v-html="code"></code></pre>
  </div>
</template>

<script>
  import formatHighlight from 'json-format-highlight'

  export default {
    data() {
      return {
        code: formatHighlight({
          a: 'string',
          b: 111,
          c: false,
          d: true,
          e: null,
          f: {
            ww: 'kkk',
            qq: [1, 2, 3],
            rr: {t: 'awt'}
          }
        }, {
          falseColor: '#f66578'
        })
      }
    }
  }
</script>

<style scoped>
  pre {
    width: 100%;
    overflow: auto;
  }
</style>
