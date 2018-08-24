<template>
	<div class="container">      
    <input type="text" class="todo-input" placeholder="what needs to be done" v-model="newTodo" @keyup.enter="addTodo">

    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">

      <div v-for="(todo,index) in todosFiltered" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <input type="checkbox" v-model="todo.completed"">
            <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed }">{{ todo.title }} completed: {{todo.completed}}
            </div> <!-- if todo.completed = true, 加入completed class-->
            <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
        </div>
        <div class="remove-item" @click="removeTodo(index)"> 
          &times;
        </div>
      </div>

    </transition-group>

    <div class="extra-container"><!--若sthRemaining(所有todo皆已完成) = false, 打勾-->
      <div><label><input type="checkbox" :checked="!sthRemaining" @change="checkAllTodos"> Check All</label></div>
      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter == 'all'}" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'active'}" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
      </div>
      <div>
        <transition name="fade">
          <button v-if="showClearCompleted" @click="clearCompleted">Clear Completed</button>
        </transition>

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
         'id': 1,
         'title': 'Complete Vue Todo',
         'completed': false,
         'editing': false,
        },
        {
         'id': 2,
         'title': 'Take a rest',
         'completed': false,
         'editing': false,
        }
      ]
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length
    },
    sthRemaining() {
      return this.remaining > 0 ; //若有todo是未完成的, sthRemaining = true; 若所有todo都已完成, sthRemaining = false (所以check all會自動打勾) 
    },
    todosFiltered() {
      if (this.filter == 'all') {
        return this.todos
      } else if (this.filter == 'active') {
        return this.todos.filter(todo => !todo.completed) // not completed = active
      } else if (this.filter == 'completed') {
        return this.todos.filter(todo => todo.completed)        
      }
    },
    showClearCompleted() {
      return this.todos.filter(todo => todo.completed).length > 0 // 若已完成的todo數量多於0, showClearCompleted = true
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return //檢查是否為空值 若為空值就不增加
      }
      this.todos.push({ //把內容加入到todos裡
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false
      })

      this.newTodo = ''
      this.idForTodo++ //讓id遞增
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title
      todo.editing = true
    },
    doneEdit(todo){
      if (todo.title.trim() == '') {
        todo.title = this.beforeEditCache
      } //prevent empty string
      todo.editing = false
    },
    cancelEdit(todo){
      todo.title = this.beforeEditCache
      todo.editing = false
    },
    removeTodo(index) {
      this.todos.splice(index, 1)//只刪1筆
    },
    checkAllTodos() {
      this.todos.forEach((todo) => todo.completed = event.target.checked)
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script> 