<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

defineEmits(['someCustomEmit'])

const count = ref(0)
const message = ref('');

const showResult = () => {
  console.log(message)
}

</script>

<template>
<div>
    <h1>{{ msg }}</h1>

  <p>
    <input type="text" v-model="message"/>
  </p>

  <button type="button" @click="$emit('someCustomEmit', 'test')">Press Me!</button>

  <p>{{ message }}</p>
</div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
