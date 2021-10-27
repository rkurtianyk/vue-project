<script>
  export default {
    data() {
      return {
        links: [
          {title: 'My Title #1', url: 'google.com', hint: 'It\'s a hint man'},
          {title: 'My Title #2', url: 'leafletjs.org', hint: 'It\'s an another hint ma boy'},
          {title: 'My Title #3', url: 'github.com', hint: 'This is also hint'},
        ],
        colorModel: '',
        colors: [],
      }
    },
    name: 'HelloWorld',
    methods: {
      setNewColor(value) {
        this.colorValue = value;
      },
      pressButton() {
        this.colors.push(this.colorModel);
      }
    },
  }
</script>

<template>
  <div>
    <h1>Please enter color below:</h1>
    <input type="text" v-model="colorModel" />
    <button class="" type="button" @click="pressButton('My super text')">Press Me!</button>
    <div class="list">
        <span v-for="c of colors" :key="c">
          <span :style="{color: c}">{{c}}</span>
        </span>
    </div>


  </div>
</template>

<style scoped>

  input {
    padding: 10px;
    margin: 10px;
    font-size: 18px;
    border: 2px solid #000;
  }

  .list span {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    padding: 15px;
  }

</style>
