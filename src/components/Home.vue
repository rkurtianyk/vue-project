<template>
  <v-container>
    <h1>
      Home
    </h1>

    <div>
      Dog's list 
    </div>
    <div>
      <button @click="addNewDog()">Add new Dog</button>
    </div>
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
   addNewDog() {
     const isUserAuthenticated = AuthService.authenticated();

     if (!isUserAuthenticated) {
       alert('Please login first');
       return;
     }

    alert('Business logic here')
    // Тут пишемо все що хочемо зробити для авторизованого користувача


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
