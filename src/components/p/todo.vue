<template>
	<div class="container">      
    <div class="todo-input">
      <input type="text" v-model="text">
      <button class="btn btn-info" v-on:click="addTodo">Add Todo</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      text: ""
    }
  },
  methods: {
    addTodo() {
      this.$emit('todo:addd', this.text);
      this.text = '';
    }
  }
}
</script>