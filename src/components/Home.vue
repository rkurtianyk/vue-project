<template>
  <v-container>
    <h1>TO DO list</h1>
    <div class="filter-panel">
      <label for="show-only-done">Show only done</label>
      <input id="show-only-done" type="checkbox" v-model="showOnlyDone" >
    </div>
    <div class="list">
      <div v-for="todo in todos" :key="todo.id" class="list-item">

        <div :class="{'strike-through': todo.done}" class="text">{{todo.text}}</div>

        <button @click="changeDone(todo)">
          <span v-if="todo.done">Undone</span>
          <span v-else>Done</span>
        </button>
      </div>
    </div>
  </v-container>

</template> 
<script>

export default {
  name: 'Home',
  computed: {
    todos() {
      return this.showOnlyDone ? this.$store.getters.doneTodos : this.$store.state.todos;
    }
  },
  data() {
   return {
     showOnlyDone: false
   }
  },
  methods: {
    changeDone(todo) {
      if (todo.done) {
        this.$store.dispatch('markAsUndone', todo.id);
      } else {
        this.$store.dispatch('markAsDone', todo.id);
      }
    },
    checkboxChange(event) {
      console.log(event);
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

  button {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .strike-through {
    text-decoration: line-through;
  }

  label {
    margin-right: 10px;
  }
</style>
