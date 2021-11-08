<template>
  <v-container>
    <h1>About Component</h1>
    <div>
      <input type="text" v-model="someNumber">
    </div>
    <br>
    <button @click="ownButtonClick()">My Own Button</button>

    <router-view name="nestedView" />
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      someNumber: null,
    }
  },
  methods: {
    ownButtonClick: function() {
      this.$router.push({ name: 'random-number', params: { number: this.someNumber, message: 'Hello from About page' }});
    }
  }
};
</script>
<style scoped>
input {
  border: 1px solid #ccc;
  margin: 10px;
}
</style>
