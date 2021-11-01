<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        someNumber: null,
        resultNumber: null,
      }
    },
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
      }
    },
    computed: {
      showResultBlock: function() {
        return Boolean(this.resultNumber);
      }
    }
  }
</script>

<template>
  <div>
    <h1>Please enter some number:</h1>
    <input type="text" v-model="someNumber" v-on:blur="onBlur" v-focus/>
    <div>
      <button type="button" @click="increment()">Increment</button>
      <br>
      <button type="button" @click="decrement()">Decrement</button>
    </div>

    <div v-if="showResultBlock"> 
      <h3>Here is your number:</h3>
      <p>{{resultNumber}}</p>
    </div>
    <div class="spinner-container" v-else>
       <font-awesome-icon :icon="['fas', 'at']" :spin="true" />
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
