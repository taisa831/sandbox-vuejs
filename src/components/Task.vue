<template>
    <div class="todoList">
        <h1>Vue.js TODO List</h1>
        <section>
            <div class="inputWrapper clearfix">
                <div class="txtBoxWrapper">
                    <label class="ef">
                        <input type="text" v-model="inputField" @keyup.enter="addTodo" placeholder="Todo Item">
                    </label>
                </div>
                <div class="addBtnWrapper">
                    <button class="addBtn" @click="addTodo">Add Todo</button>
                </div>
            </div>
        </section>
        <section>
            <div>
                <ul>
                    <li v-for="todo in todoList">
                        <div class="todo">
                            <label class="chkboxlabel">
                                <input class="chkbox" type="checkbox" @change="toggle(todo)" v-bind:value="todo.ID" v-bind:checked="todo.Status === 3">
                            </label>
                            <del class="" v-if="todo.Status === 3"><h5 class="todoTxt">{{ todo.Text }}</h5></del>
                            <span v-else><h5 class="todoTxt">{{ todo.Text }}</h5></span>
                            <span class="deleteBtn" @click="deleteTodo(todo)">X</span>
                        </div>

                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Product",
    data() {
      return {
        todoList: [],
        inputField: '',
        isActive: false,
        baseUrl: 'http://sandbox.taisablog.com/go/api/v1/'
      }
    },
    created() {
      this.getTodo()
    },
    methods: {
      async getTodo() {
        try {
          let response = await axios.get(this.baseUrl + 'todo')
          this.todoList = response.data
        } catch(e) {
          console.log(e)
        }
      },
      async addTodo() {
        try {
          let params = {
            'text': this.inputField,
            'status': 1
          }
          await axios.post(this.baseUrl + 'todo', JSON.stringify(params))
          this.getTodo()
        } catch (error) {
          console.log(error)
        }
      },
      async deleteTodo(todo) {
        try {
          await axios.post(this.baseUrl + 'todo/delete/' + todo.ID)
          this.getTodo()
        } catch (e) {
          console.log(e)
        }
      },
      async toggle(todo) {
        try {
          let status = 0
          if (todo.Status === 1) {
            status = 3
          } else {
            status = 1
          }
          let params = {
            'status': status
          }
          await axios.post(this.baseUrl + 'todo/edit/' + todo.ID, JSON.stringify(params))
          todo.Status = status
        } catch (e) {
          console.log(e)
        }
      }
    },
  }
</script>

<style scoped>
    .todoList {
        width: 100%;
    }
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
    .inputWrapper {
        position: relative;
        width: 30%;
        margin: auto;
    }
    .inputWrapper input[type='text'] {
        font: 15px/24px sans-serif;
        box-sizing: border-box;
        width: 100%;
        padding: 0.3em;
        transition: 0.3s;
        letter-spacing: 1px;
        border: 1px solid #1b2538;
        border-radius: 4px;
    }
    .ef input[type='text']:focus {
        border: 1px solid #da3c41;
        outline: none;
        box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
    }
    .txtBoxWrapper {
        float: left;
    }
    .addBtnWrapper {
        float: right;
    }
    .addBtn {
        position: relative;
        display: inline-block;
        padding: 0.25em 0.5em;
        text-decoration: none;
        color: #FFF;
        background: #007bff;
        border: solid 1px #007bff;
        border-radius: 4px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
        text-shadow: 0 1px 0 rgba(0,0,0,0.2);
        width: 100px;
        height: 35px;
        font-size: 16px;
    }
    ul {
        list-style: none;
    }
    li {
        border: 1px solid #dee2e6;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
        margin: 10px auto;
        width: 70%;
        height: 80px;
    }
    .todo {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .chkboxlabel {
        width: 100%;
        display: inline-block;
        text-align: left;
    }
    .chkbox {
        transform: scale(1.3);
        margin-left: 10px;
    }
    .todoTxt {
        font-size: 20px;
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }
    .deleteBtn {
        color: pink;
        text-align: right;
        margin-right: 20px;
        width: 100%;
        display: inline-block;
        font-size: 15px;
        cursor: pointer;
    }

    @media screen and (max-width:480px){
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            border: 1px solid #dee2e6;
            border-top-left-radius: .25rem;
            border-top-right-radius: .25rem;
            margin: 10px 0;
            width: 80%;
            height: 80px;
            padding: 0;
        }
        .inputWrapper{
            margin: 0px 200px
        }
    }
</style>