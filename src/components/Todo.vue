<template>
    <div class="todoList">
        <h1>Vue.js TODO List</h1>
        <section>
            <div class="inputWrapper clearfix">
                <div class="txtBoxWrapper">
                    <label class="ef">
                        <input type="text" v-model="inputField" @keypress.enter="addTodo" placeholder="Todo Item">
                    </label>
                </div>
                <div class="addBtnWrapper">
                    <button class="addBtn" @click="addTodo">Add</button>
                </div>
            </div>
        </section>
        <section>
            <div>
                <ul>
                    <li v-for="todo in todoList">
                        <div class="todo">
                            <label class="chkboxLabel">
                                <input class="chkbox" type="checkbox" @change="toggle(todo)" v-bind:value="todo.ID"
                                       v-bind:checked="todo.Status === 3">
                            </label>
                            <span class="" v-if="todo.Status === 3">
                                <h5 class="todoTxt Finished">{{ todo.Text }}</h5>
                            </span>
                            <span v-else>
                                <h5 class="todoTxt NotStarted">{{ todo.Text }}</h5>
                            </span>
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

  const NOT_STARTED = 1 // 未対応
  const STARTED = 2 // 対応中
  const FINISHED = 3 // 完了

  export default {
    name: "Todo",
    data() {
      return {
        todoList: [],
        inputField: '',
        isActive: false,
        baseUrl: 'http://gin.taisablog.com/api/v1/'
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
        } catch (e) {
          console.log(e)
        }
      },
      async addTodo() {
        if (!this.inputField) {
          return
        }

        try {
          let params = {
            'text': this.inputField,
            'status': 1
          }
          await axios.post(this.baseUrl + 'todo', JSON.stringify(params))
          this.getTodo()
          this.inputField = ''
        } catch (error) {
          console.log(error)
        }
      },
      async deleteTodo(todo) {
        try {
          await axios.delete(this.baseUrl + 'todo/' + todo.ID)
          this.getTodo()
        } catch (e) {
          console.log(e)
        }
      },
      async toggle(todo) {
        try {
          let status = 0
          if (todo.Status === NOT_STARTED) {
            status = FINISHED
          } else {
            status = NOT_STARTED
          }
          let params = {
            'status': status
          }
          await axios.put(this.baseUrl + 'todo/' + todo.ID, JSON.stringify(params))
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
      width: 380px;
      margin: auto;
      display: block;
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
      box-shadow: 0 0 5px 1px rgba(218, 60, 65, .5);
  }
  .txtBoxWrapper {
      float: left;
      width: 270px;
  }
  .addBtnWrapper {
      float: right;
  }
  .addBtn {
      position: relative;
      display: block;
      text-decoration: none;
      color: #FFF;
      background: #007bff;
      border: solid 1px #007bff;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
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
      width: 50%;
      height: 80px;
  }
  .todo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
  }
  .chkboxLabel {
      width: 20px;
      display: inline-block;
      text-align: left;
      margin-right: 10px;
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
      display: inline-block;
  }
  .todoTxt.NotStarted {
      text-decoration: none;
  }
  .todoTxt.Finished {
      text-decoration: line-through;
  }
  .deleteBtn {
      color: pink;
      text-align: right;
      margin-right: 20px;
      margin-left: 10px;
      width: 20px;
      display: block;
      font-size: 20px;
      cursor: pointer;
  }
  @media screen and (max-width: 520px) {
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
       width: 100%;
       height: 80px;
       padding: 0;
    }
    .inputWrapper {
       margin: 0px auto
    }
  }
</style>