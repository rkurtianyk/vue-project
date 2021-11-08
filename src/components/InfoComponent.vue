<template>
  <v-container>
    <h1>Info Component</h1>
    <h2>Here is the count from the Info Component: {{$store.state.count}}</h2>
  </v-container>
</template> 
<script>

export default {
  name: 'InfoComponent',
}
</script>

<style scoped>
  .v-container {
    margin: 15px;
  }
</style>
