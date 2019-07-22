<template>
    <footer class="footer">
        <ul class="horizontal-list">
            <li class="horizontal-item"><a href="#">ABOUT ME</a></li>
            <li class="horizontal-item"><a href="#">SITE MAP</a></li>
            <li class="horizontal-item"><a href="#">SNS</a></li>
            <li class="horizontal-item"><a href="#">CONTACT</a></li>
        </ul>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
    .footer {
        width: 100%;
        padding: 20px 0 30px;
        color: #fff
    }
    .horizontal-list {
        width: 970px;
        margin: 0 auto;
        /*text-align: right;*/
        font-size: 10px;
    }
    .horizontal-list .horizontal-item {
        display: inline-block;
        padding: 0 15px;
        letter-spacing: 1px;
    }
</style>
