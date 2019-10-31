<template>
  <div id="app">
    <pre><code v-html="code" /></pre>
  </div>
</template>

<script>
  import formatHighlight from '../src'

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
          },
          g: '<p>hello world</p> with \n <p>new line</p> and quote sign: "',
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
