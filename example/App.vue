<template>
  <div id="app">
    <pre><code v-html="code"></code></pre>
  </div>
</template>

<script>
  import formatHighlight from '../src'
  console.log(formatHighlight)

  export default {
    data() {
      return {
        code: formatHighlight({
          a: 'test',
          b: 111,
          c: false,
          d: null
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
