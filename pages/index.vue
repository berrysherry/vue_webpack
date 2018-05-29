<template>
  <div id="test">
    <div class="post" v-for="post in users" :key="post.id" style="background-color: #EEE">
      <h4>Title: {{ post.name }}</h4>
      <p>Description: {{ post.address.city }}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
      data () {
        return {
          users: []
        }
      },
      mounted(){
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res){
          self.users = res.data;
            console.log('Data: ', res.data);
          })
        .catch(function(error){
            console.log('Error: ', error);
        })
        
      }

  }

</script>