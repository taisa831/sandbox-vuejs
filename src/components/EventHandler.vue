<template>
    <div class="main">
        <h1>イベントとフォーム入力の受け取り</h1>

        <h1>イベントハンドリング</h1>

        <h2 id="e1">メソッドイベントハンドラ</h2>
        クリックでプラスプラス1：<button v-on:click="handleClick">クリック</button><br>

        <h2 id="e2">インラインイベントハンドラ</h2>
        クリックでプラスプラス1：<button v-on:click="count++">クリック</button><br>
        クリックでコンソールに表示：<button v-on:click="handleClick2($event, message)">クリック</button><br>

        <h2 id="e3">使用可能なイベント</h2>
        ふわっとロード：<img v-bind:src="'./logo.png'" v-on:load="show=true" v-bind:class="{hide: !show}"><br>
        ドラッグイベント：<span v-on:dragstart="handler" draggable="true" id="hoge">ドラッグ可能</span>

        <h2 id="e4">フォーム入力の取得</h2>
        <input v-bind:value="message" v-on:input="handleInput">

        <h2 id="e5">イベント修飾子</h2>
        <h3>.right</h3>
        右クリックでコンテキストメニューがでる：<span @click.right="handler" id="right">example</span><br>
        右クリックでコンテキストメニューを表示させない：<span @click.right.prevent="handler" id="right-prevent">example</span>

        <h3 id="e6">.stop</h3>
        <div @click="print('div1')">
            div1
            <a href="#top" @click.stop="print('div2')">div2</a>
        </div>

        <h3 id="e7">.prevent</h3>
        <div @click="print('div1')">
            div1
            <a href="#top" @click.prevent="print('div2')">div2</a>
        </div>

        <h3 id="e8">.capture</h3>
        <div @click.capture="print('div1')">
            div1
            <div @click="print('div2')">
                div2
                <div @click="print('div3')">
                    div3
                </div>
            </div>
        </div>

        <h1>フォーム入力バインディング</h1>

        <h2 id="m1">v-modelの使い方</h2>

        <input v-model="message">
        <p>{{message}}</p>

        <h2 id="m2">複数行テキスト</h2>
        <textarea v-model="message"></textarea>
        <pre>{{message}}</pre>

        <h2 id="m3">チェックボックス</h2>
        <h3>単一要素</h3>
        <label>
            <input type="checkbox" v-model="val">チェックボックス
        </label>

        <h3>複数要素</h3>
        <label><input type="checkbox" v-model="multiVal" value="A">A</label>
        <label><input type="checkbox" v-model="multiVal" value="B">B</label>
        <label><input type="checkbox" v-model="multiVal" value="C">C</label>

        <h2 id="m4">ラジオボタン</h2>
        <label><input type="radio" v-model="radioVal" value="A">A</label>
        <label><input type="radio" v-model="radioVal" value="B">B</label>
        <label><input type="radio" v-model="radioVal" value="C">C</label>

        <h2 id="m5">セレクトボックス</h2>
        <h3>単一要素</h3>
        <select v-model="selectVal">
            <option disabled="disabled">選択してください</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
        </select>

        <h3>複数選択</h3>
        <select v-model="selectMultiVal" multiple>
            <option disabled="disabled">選択してください</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
        </select>

        <h2 id="m6">画像ファイル</h2>
        <input type="file" @change="fileChange">
        <div v-if="preview"><img v-bind:src="preview"></div>

        <h2 id="m7">その他の入力タイプ</h2>
        <input type="range" v-model.number="rangeVal"> {{rangeVal}}

        <h2 id="m8">修飾子</h2>

        <h3>.number</h3>
        <input type="text" v-model.number="price">
        <p>{{price}}</p>

        <h3>.lazy</h3>
        <input type="text" v-model.lazy="text">
        <pre>{{text}}</pre>

        <h2>マウント要素外のイベントと操作</h2>
        <p v-bind:class="{ compact: scrollY > 200}" id="mo1">200pxより下にスクロールしたら .compact クラスを付与</p>

        <div id="mo2" @click="scrollTop">ページ上部へ移動</div>
    </div>
</template>

<script>

  export default {
    name: 'EventHandler',
    data() {
      return {
        show: false,
        message: 'Hello!',
        count: 0,
        val: [],
        multiVal: [],
        radioVal: '',
        selectVal: '',
        selectMultiVal: [],
        preview: '',
        rangeVal: 50,
        price: 1000,
        text: '',
        scrollY: 0,
        timer: null,
        scroll: {}
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleClick() {
        this.count++
      },
      handleClick2(event, msg) {
        console.log(event)
        console.log(msg)
        this.message = msg
      },
      handler(event) {
        //event.dataTransfer.setData("text", event.target.id)
        console.log(event.target.id)
      },
      handleInput(event) {
        console.log(event.target.value)
        this.message = event.target.value
      },
      print(str) {
        console.log(str)
      },
      fileChange(event) {
        let file = event.target.files[0]
        if (file) {
          this.preview = window.URL.createObjectURL(file)
        }
      },
      handleScroll() {
        if (this.timer === null) {
          this.timer = setTimeout(function() {
            this.scrollY = window.scrollY
            clearTimeout(this.timer)
            this.timer = null
          }.bind(this), 200)
        }
      },
      scrollTop() {
        this.$SmoothScroll(document.querySelector('#app'), 400, null, null, 'y')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2 {
        background-color: #dcdcdc;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    img {
        opacity: 1;
        transition: opacity 1s;
    }

    img.hide {
        opacity: 0;
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
