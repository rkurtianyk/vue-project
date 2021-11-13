<template>
  <v-container>
    <h1>
      <span>TO DO list</span>
      <button @click="logout()">Logout</button>
      </h1>
    <div class="filter-panel">
      <label for="show-only-done">Show only done</label>
      <input id="show-only-done" type="checkbox" v-model="showOnlyDone" >
    </div>
    <div class="list">
      <div v-for="todo in todos" :key="todo.id" class="list-item">

        <div v-if="currentEditingTodo !== todo.id" :class="{'strike-through': todo.done}" class="text">{{todo.text}}</div>
        <input v-if="currentEditingTodo === todo.id" class="text" v-model="todo.text" v-on:change="editTodo(todo)"/>

        <button @click="editClick(todo)">
                    <span v-if="currentEditingTodo !== todo.id">
                      <font-awesome-icon icon="edit" />
                    </span>                    
                    <span v-if="currentEditingTodo === todo.id">
                      <font-awesome-icon icon="check" />
                    </span>
        </button>
        <button @click="changeDone(todo)">
           <font-awesome-icon icon="thumbs-up" />
        </button>

        <button @click="deleteTodo(todo.id)"> <font-awesome-icon icon="trash-alt" /></button>
      </div>
    </div>

    <div>
      <h3>Please enter new todo</h3>
      <input type="text" v-model="currentTodoText"/>
      <button @click="saveNewTodo()">Save</button>
    </div>
  </v-container>

</template> 
<script>
import { db, } from '../api/firebaseDb';
import AuthService from '../api/auth';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../api/todo';

export default {
  name: 'Home',
  computed: {
    todos() {
      return this.firebaseTodos;
    }
  },
  async created() {
    await this.loadTodos();
  },
  data() {
   return {
     currentEditingTodo: '',
     showOnlyDone: false,
     currentTodos: [],
     firebaseTodos: [],
     currentTodoText: ''
   }
  },
  methods: {
    async editClick(todo) {
      if (todo.id === this.currentEditingTodo) {
        await this.editTodo(todo);
        this.currentEditingTodo = '';
        await this.loadTodos();
      } else {
      this.currentEditingTodo = todo.id;
      }

    },
    async loadTodos() {
      this.firebaseTodos = await getTodos(db);
    },
    async changeDone(todo) {
      const data = {
        text: todo.text,
        done: !todo.done,
      }
      try {
        await updateTodo(db, todo.id, data);
        await this.loadTodos();
      } catch (e) {
        console.error(e);
      }
    },
    checkboxChange(event) {
      console.log(event);
    },
    async saveNewTodo () {
      if (this.currentTodoText.length > 0) {

       try {
          await addTodo(db, this.currentTodoText);
          this.currentTodoText = '';
          await this.loadTodos();
       } catch (e) {
         console.error(e);
       }
      }

    },
    async deleteTodo(id) {
        try {
          await deleteTodo(db, id);
          await this.loadTodos();
       } catch (e) {
         console.error(e);
       }
    },
    async editTodo(todo) {
      const data = {
        text: todo.text,
        done: todo.done,
      }
      try {
        await updateTodo(db, todo.id, data);
        await this.loadTodos();
      } catch (e) {
        console.error(e);
      }
    },
    async logout() {
      AuthService.logout();
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped>
  .v-container {
    margin: 15px;
  }

  .list-item {
    display: flex;
    margin: 10px;
    align-items: center;
  }

  .text {
    width: 200px;
    color: blue;
  }

  button, input {
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
  }

  .strike-through {
    text-decoration: line-through;
  }

  label {
    margin-right: 10px;
  }
</style>
