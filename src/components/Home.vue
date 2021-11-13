<template>
  <v-container>
    <h1>TO DO list</h1>
    <div class="filter-panel">
      <label for="show-only-done">Show only done</label>
      <input id="show-only-done" type="checkbox" v-model="showOnlyDone" >
    </div>
    <div class="list">
      <div v-for="todo in todos" :key="todo.id" class="list-item">

        <div v-if="!editMode" :class="{'strike-through': todo.done}" class="text">{{todo.text}}</div>
        <input v-if="editMode" class="text" v-model="todo.text" v-on:change="editTodo(todo)"/>

        <button @click="changeDone(todo)">
          <span v-if="todo.done">Undone</span>
          <span v-else>Done</span>
        </button>

        <button @click="deleteTodo(todo.id)">Delete</button>
        <button @click="editClick(todo.id)">Edit</button>
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
     editMode: false,
     currentEditingTodo: '',
     showOnlyDone: false,
     currentTodos: [],
     firebaseTodos: [],
     currentTodoText: ''
   }
  },
  methods: {
    editClick(id) {
      this.editMode = !this.editMode;
      this.currentEditingTodo = id;
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
        this.editMode = false;
      } catch (e) {
        console.error(e);
      }
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
