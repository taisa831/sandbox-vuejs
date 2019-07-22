<template>
    <header class="sidemenu">
        <h2 class="heading">イベントハンドラ</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><a href="#">メソッドイベントハンドラ</a></li>
                    <li><a href="#">インラインイベントハンドラ</a></li>
                    <li><a href="#">使用可能なイベント</a></li>
                    <li><a href="#">フォーム入力の取得</a></li>
                    <li><a href="#">イベント修飾子</a></li>
                </ul>
            </li>
        </ul>
        <h2 class="heading">フォーム入力バインディング</h2>
        <ul class="documents">
            <li>
                <h3 class="title"></h3>
                <ul>
                    <li><a href="#">v-modelの使い方</a></li>
                    <li><a href="#">複数行テキスト</a></li>
                    <li><a href="#">チェックボックス</a></li>
                    <li><a href="#">ラジオボタン</a></li>
                    <li><a href="#">セレクトボックス単一選択</a></li>
                    <li><a href="#">セレクトボックス複数選択</a></li>
                    <li><a href="#">修飾子</a></li>
                    <li><a href="#">マウント要素外のイベントと操作</a></li>
                </ul>
            </li>
        </ul>
    </header>
</template>

<script>
  export default {
    name: 'Sidemenu',
    data() {
      return {
      }
    },
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
