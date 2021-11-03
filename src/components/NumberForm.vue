<script>
import SuperButton from './SuperButton.vue'

  export default {
    name: 'NumberForm',
    data() {
      return {
        someNumber: null,
        resultNumber: null,
      }
    },
    props: ['header', 'result'],
    methods: {
      increment() {
        if (this.resultNumber) {
          this.resultNumber++;
        }
      }, 
      decrement() {
        if (this.resultNumber) {
          this.resultNumber--;
        }
      },
      onBlur() {
        this.resultNumber = +this.someNumber;
        this.someNumber = '';
      },
      showTheMeaning() {
        console.warn('The Meaning')
      }
    },
  }
</script>

<template>
  <div>
    <h1>{{header}}</h1>
    <input type="text" v-model="someNumber" v-on:blur="onBlur" v-focus/>
    <div>
      <SuperButton :text="'Increment'" :type="'main'" @onClick="increment()"/>
      <br>
      <SuperButton :text="'Decrement'" :type="'regular'" @onClick="decrement()"/>
    </div>

    <div>
      <h3>{{result}}</h3>
      <p>{{resultNumber}}</p>
    </div>

    <div>
      <SuperButton :text="'SHOW ME THE MEANING'" @onClick="showTheMeaning()" :type="'regular'" circled="true"/>
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

  input:focus {
    outline: 0;
    border: 2px solid blue;
  }

  .spinner-container {
    margin-top: 10px;
    font-size: 2rem;
  }

  button {
    padding: 15px;
    margin-top: 5px;
  }

  .result {
    display: inline-block;
    width: 300px;
    border: 1px solid black;
  }

</style>
