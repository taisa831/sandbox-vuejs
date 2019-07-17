<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <h1>メソッドイベントハンドラ</h1>
        <button v-on:click="handleClick">クリック</button><br>

        <h1>インラインイベントハンドラ</h1>
        <button v-on:click="count++">クリック</button><br>
        <button v-on:click="handleClick2($event, msg)">クリック</button><br>

        <h1>使用可能なイベント</h1>
        <img v-bind:src="'./logo.png'" v-on:load="show=true" v-bind:class="{hide: !show}">
        <div v-on:dragstart="handler" draggable="true" id="hoge">ドラッグ可能</div>

        <h1>フォーム入力の取得</h1>
        <input v-bind:value="message" v-on:input="handleInput">

        <h1>イベント修飾子</h1>
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
                count: 0
            }
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
