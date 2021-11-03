<script>
export default {
  name: 'UserInfo',
  props: ['firstName', 'lastName', 'age', 'avatar', 'skills', 'salary', 'manager', ],
  emits: ['saved', 'failed', 'changed', 'deleted', 'updated'],
  methods: {
    onClick() {
        if (Math.random() < 0.5) {
            this.$emit('onClick');
        }
    }
  },
};
</script>

<template>
  <button
    :class="{ primary: this.type === 'main', secondary: this.type === 'regular', circled }"
    @click="onClick()"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  padding: 15px;
  margin-top: 5px;
}

.primary {
  background-color: blue;
  font-weight: bold;
}

.secondary {
  background-color: orange;
}
.circled {
  border-radius: 10px;
}
</style>
