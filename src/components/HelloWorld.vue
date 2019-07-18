<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <h1>イベントハンドラ</h1>

        <h2>メソッドイベントハンドラ</h2>
        <button v-on:click="handleClick">クリック</button>
        <br>

        <h2>インラインイベントハンドラ</h2>
        <button v-on:click="count++">クリック</button>
        <br>
        <button v-on:click="handleClick2($event, msg)">クリック</button>
        <br>

        <h2>使用可能なイベント</h2>
        <img v-bind:src="'./logo.png'" v-on:load="show=true" v-bind:class="{hide: !show}">
        <div v-on:dragstart="handler" draggable="true" id="hoge">ドラッグ可能</div>

        <h2>フォーム入力の取得</h2>
        <input v-bind:value="message" v-on:input="handleInput">

        <h2>イベント修飾子</h2>
        <p>.right</p>
        <div @click.right="handler" id="right">example</div>
        <!-- 右クリック時のコンテキストメニューを表示させない -->
        <div @click.right.prevent="handler" id="right-prevent">example</div>

        <p>.stop</p>
        <div @click="print('div1')">
            div1
            <a href="#top" @click.stop="print('div2')">div2</a>
        </div>

        <p>.prevent</p>
        <div @click="print('div1')">
            div1
            <a href="#top" @click.prevent="print('div2')">div2</a>
        </div>

        <p>.capture</p>
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

        <h2>v-modelの使い方</h2>

        <input v-model="message">
        <p>{{message}}</p>

        <h2>複数行テキスト</h2>
        <textarea v-model="message"></textarea>
        <pre>{{message}}</pre>

        <h2>チェックボックス</h2>
        <h3>単一要素</h3>
        <label>
            <input type="checkbox" v-model="val">チェックボックス
        </label>

        <h3>複数要素</h3>
        <label><input type="checkbox" v-model="multiVal" value="A">A</label>
        <label><input type="checkbox" v-model="multiVal" value="B">B</label>
        <label><input type="checkbox" v-model="multiVal" value="C">C</label>

        <h3>ラジオボタン</h3>
        <label><input type="radio" v-model="radioVal" value="A">A</label>
        <label><input type="radio" v-model="radioVal" value="B">B</label>
        <label><input type="radio" v-model="radioVal" value="C">C</label>

        <h3>セレクトボックス 単一選択</h3>
        <select v-model="selectVal">
            <option disabled="disabled">選択してください</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
        </select>

        <h3>セレクトボックス 複数選択</h3>
        <select v-model="selectMultiVal" multiple>
            <option disabled="disabled">選択してください</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
        </select>

        <h3>画像ファイル</h3>
        <input type="file" @change="fileChange">
        <div v-if="preview"><img v-bind:src="preview"></div>

        <h3>その他の入力タイプ</h3>
        <input type="range" v-model.number="rangeVal"> {{rangeVal}}

        <h3>修飾子</h3>
        <input type="text" v-model.number="price">{{price}}
        <br>
        <input type="text" v-model.lazy="text">
        <pre>{{text}}</pre>

        <h2>マウント要素外のイベントと操作</h2>
        <header v-bind:class="{ compact: scrollY > 200}">
            200pxより下にスクロールしたら .compact を付与
        </header>

        <div @click="scrollTop">
            ページ上部へ移動
        </div>
    </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data() {
      return {
        show: false,
        message: 'Hello!',
        count: 0,
        val: false,
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
    h3 {
        margin: 40px 0 0;
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

</style>
