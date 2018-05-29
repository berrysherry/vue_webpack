<template>
	<div class="todoitem">      
    <button class="btn btn-danger removeTodo" v-on:click="removeTodo">Remove</button> {{todo.text}}
  </div>
</template>
<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  data () {
    return {
      text: ""
    }
  },
  methods: {
    removeTodo() {
      this.$emit('todo:remove', this.todo.id);
      this.text = '';
    }
  }
}
</script>