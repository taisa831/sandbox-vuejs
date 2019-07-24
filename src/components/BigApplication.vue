<template>
    <div class="main">
        <p>{{ scrollY }}</p>
    </div>
</template>

<script>

  export default {
    name: 'BigApplication',
    data() {
      return {
      }
    },
    created() {
    },
    computed: {
      scrollY() {
        return this.$window.scrollY
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2 {
        background-color: #dcdcdc;
    }
    .main {
        display: block;
        float: left;
        width: 650px;
        border: 1px solid #dcdcdc;
        text-align: left;
        padding: 0px 10px 0px 10px;
    }
</style>
