<script setup>
import NumberForm from './components/NumberForm.vue'
import SuperButton from './components/SuperButton.vue'

const handleClick = function(event) {
  console.log(event);
}
</script>

<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />

  <NumberForm :header="'Please enter some number:'" :result="'Here is your number:'"/>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
