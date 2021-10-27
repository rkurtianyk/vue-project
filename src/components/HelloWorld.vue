<script>
  import { ref } from 'vue'

  export default {
    data() {
      return {
        links: [
          {title: 'My Title #1', url: 'google.com', hint: 'It\'s a hint man'},
          {title: 'My Title #2', url: 'leafletjs.org', hint: 'It\'s an another hint ma boy'},
          {title: 'My Title #3', url: 'github.com', hint: 'This is also hint'},
        ],
        colorModel: '',
        colorValue: ''
      }
    },
    watch: {
      colorModel(newColor, oldColor) {
        if (newColor !== '') {
          this.setNewColor(newColor);
        }
      }
    },
    name: 'HelloWorld',
    props: {
      msg: {
        type: String
      }
    },
    methods: {
      setNewColor(value) {
        this.colorValue = value;
      }
    },
    setup() {
     // const color = ref('')
    }
  }
</script>

<template>
  <div>
    <h1>Please enter color below:</h1>
    <input type="text" v-model="colorModel" />
    <button class="" type="button" @click="pressButton('My super text')">Press Me!</button>
    <p :style="{ color: colorValue }">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tenetur nulla, 
      laudantium aperiam asperiores excepturi non voluptas est quasi, animi culpa harum aliquam 
      eveniet laboriosam ab obcaecati provident tempore iure?</p>

  </div>
</template>

<style scoped>

  .paragraph input {
    padding: 10px;
    font-size: 18px;
    border: 2px solid #000;
  }

  .list {
    font-size: 18px;
    margin: 10px;
    background-color: pink;
  }

  .link-item {
    margin: 10px;
  }
  a {
    color: #42b983;
  }
</style>
