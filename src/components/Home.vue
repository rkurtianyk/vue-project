<template>
  <v-container>
    <h1>
      Home
      </h1>

      <router-view></router-view>
  </v-container>

</template> 
<script>
import BreedService from '../api/breedService';
import { db, } from '../api/firebaseDb';
import AuthService from '../api/auth';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../api/todo';

export default {
  name: 'Home',
  computed: {
    todos() {
      return this.firebaseTodos;
    },
    breeds() {
      if (this.loadedBreeds && this.loadedBreeds.length > 1) {
        return this.loadedBreeds;
      } else {
        return [];
      }

    }
  },
  async created() {
    await this.loadBreeds();
  },
  data() {
   return {
     currentEditingTodo: '',
     showOnlyDone: false,
     currentTodos: [],
     firebaseTodos: [],
     currentTodoText: '',
     loadedBreeds: [],
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
    async loadBreeds() {
      this.loadedBreeds = await BreedService.getList();
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
    width: 500px;
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
