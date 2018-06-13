<template>
  <div id="test">

    <todo></todo>

<!--     <h4>Recommendation:</h4>
    <testcontent v-bind:loadmsg="drink" v-for="(drink, index) in itemlist" :key="index"></testcontent>
    
    <h4>Fruits available:</h4>
    <fruitcontent v-bind:loadfruit="fruit" v-for="fruit in fruitlist" :key="fruit.index"></fruitcontent>

    <p>{{pmsg}}</p> -->

    <!-- <polaroidgallery></polaroidgallery> -->

    <header>
        <slot name="header"></slot>
    </header>
  </div>
</template>

<script>
  import Testcontent from './p/Testcontent'
  import Fruitcontent from './p/Fruitcontent'
  import Polaroidgallery from './p/Polaroidgallery'
  import Todo from './p/Todo'
  import Todoitem from './p/Todoitem'

  export default {
    name: 'test',
    components: {
      Testcontent, Fruitcontent, Polaroidgallery, Todo,Todoitem
    },
      data () {
      return {
        itemlist: [
          {title: 'Peach', description: 'fruits'},
          {title: 'Milkshake', description: 'beveages'},
          {title: 'Apple tea', description: 'tea'}
        ],
        fruitlist: [
          {name: 'Banana'},
          {name: 'Orange'},
          {name: 'Mango'}
        ],
        pmsg: 'parent msg',
        todos: [

        ],
        // nextId: 0
      }
    },
    // methods: {
    //   addTodo(text) {
    //     this.todos.push({id: this.nextId, text:text});
    //     this.nextId++;
    //   },
    //   removeTodo(id) {
    //     let todos = this.todos;
    //     this.todos = todos.filter((todo) => todo.id != id);
    //   }
    // }
  }

</script>
