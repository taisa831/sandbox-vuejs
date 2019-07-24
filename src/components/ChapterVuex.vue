<template>
    <div class="main">
        <!--<p v-on:click="increments">カウントアップ</p>-->
        <!--<p v-on:click="mutationType">カウントアップ</p>-->
        <h2>メッセージを取得する</h2>
        <p>{{ message }}</p>

        <h2>ステートやゲッターにv-modelを使用する</h2>

        <h2>コンポーネントとストアをバインドするヘルパー</h2>

    </div>
</template>

<script>

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'ChapterVuex',
    data() {
      return {
      }
    },
    components: {
    },
    created() {
      console.log(this.message)
      this.doUpdate('変更メッセージ')
      console.log(this.message)

      this.increments(1)
      console.log(this.count)
    },
    methods: {
      ...mapActions([
        'increments',
        'doUpdate',
        'actionType'
      ])
    },
    computed: {
      ...mapGetters([
        'message',
        'count'
      ])
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
