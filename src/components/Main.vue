<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>

</template>

<script>
import Header from './Header.vue'

export default {
  name: 'App',
}
</script>
