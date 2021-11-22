<template>
  <div class="flex1">
    <Header />
    <router-view></router-view>
  </div>

</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
}
</script>

<style scoped>
.flex1 {
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>
