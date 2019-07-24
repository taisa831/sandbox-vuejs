<template>
    <header class="sidemenu">
        <h2 class="heading">イベントとフォーム入力の受け取り</h2>
        <h2 class="heading">イベントハンドリング</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><a href="#e1">メソッドイベントハンドラ</a></li>
                    <li><a href="#e2">インラインイベントハンドラ</a></li>
                    <li><a href="#e3">使用可能なイベント</a></li>
                    <li><a href="#e4">フォーム入力の取得</a></li>
                    <li><a href="#e5">イベント修飾子</a></li>
                </ul>
            </li>
        </ul>
        <h2 class="heading">フォーム入力バインディング</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><a href="#m1">v-modelの使い方</a></li>
                    <li><a href="#m2">複数行テキスト</a></li>
                    <li><a href="#m3">チェックボックス</a></li>
                    <li><a href="#m4">ラジオボタン</a></li>
                    <li><a href="#m5">セレクトボックス単一選択</a></li>
                    <li><a href="#m6">画像ファイル</a></li>
                    <li><a href="#m7">修飾子</a></li>
                </ul>
            </li>
        </ul>
        <h2 class="heading">マウント要素街のイベントと操作</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><a href="#mo1">スクロールイベントの取得</a></li>
                    <li><a href="#mo2">スムーススクロールの実装</a></li>
                </ul>
            </li>
        </ul>
        <h2>親のデータを更新する</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><span v-on:click="updateParentData">親のデータ更新</span></li>
                </ul>
            </li>
        </ul>
    </header>
</template>

<script>
  export default {
    name: 'SideNavi3',
    props: {
      val: String
    },
    data() {
      return {
      }
    },
    created() {
      console.log(this.val)
      //this.val = '子で変更' ← NG
    },
    methods: {
      updateParentData() {
        this.$emit('child-event', '子からデータ更新')
      }
    }
  }
</script>

<style scoped>
    .sidemenu {
        float: right;
        width: 300px;
        border: 1px solid #dcdcdc;
        text-align: left;
        padding-left: 10px;
    }
    .documents {
        margin: 10px 10px 30px;
    }
    .documents,
    .documents ul {
        list-style-type: none;
    }
    .documents > li . title {
        margin: 15px 0;
        padding-left: 8px;
        border-left: 5px solid #d03c56;
        font-size: 1.4rem;
        line-height: 1.2;
    }
    .documents > li + li {
        margin-top: 25px;
    }
</style>
