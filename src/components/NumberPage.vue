<template>
  <v-container>
    <h1>Number Page is {{ $route.params.number }}</h1>

    <div style="margin: 10px;">
      <h2>{{message}}</h2>
    </div>
    <router-link to="/">Go Home</router-link>
  </v-container>
</template>

<script>

export default {
  name: 'NumberPage',
  props: ['message']
}
</script>
