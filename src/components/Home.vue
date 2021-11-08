<template>
  <v-container>
    <h1>TO DO list</h1>
    <div class="list">
      <div v-for="todo in todos" :key="todo.id" class="list-item">

        <div :class="{'strike-through': todo.done}" class="text">{{todo.text}}</div>

        <button @click="changeDone(todo.id)">
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
      return this.$store.state.todos
    }
  },
  methods: {
    changeDone(id) {
      this.$store.commit('changeDone', id)
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
</style>
