<template>
    <header class="header">
        <h1 class="logo">
            <a href="/">Sandbox VueJS</a>
        </h1>
    </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
    .header {
        width: 100%;
        padding: 28px 0 10px;
        /*background: url('../images/bg-header.gif') repeat-x;*/
        box-shadow: 0 0 10px 1px #e3e3e3;
    }
</style>
