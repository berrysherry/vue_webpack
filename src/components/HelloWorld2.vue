<template>
  <div class="hello container mt-5">
    <div class="input-group mb-4">
      <input type="text" class="form-control" placeholder="Input message" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>

    <div class="media my-3" v-for="item in messages">
      <img v-if="item.username == username" class="align-self-start mr-3" src="../assets/cake.jpg" alt="Generic placeholder image" height="150">
      <div class="media-body">
        <h5 class="mt-0">{{item.username}}</h5>
        <p>{{item.message}}</p>
      </div>
      <img v-if="item.username != username" class="align-self-start mr-3" src="../assets/macaron.jpg" alt="Generic placeholder image" height="150">
    </div>
      

<!--       <div class="media">      
          <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <img class="align-self-start mr-3" src="../assets/macaron.jpg" alt="Generic placeholder image" height="150">
    </div> -->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: 'Apple',
      msg: 'Welcome to Your Vue.js App',
      messages: [
        {
          username: 'Apple',
          message: 'master'
        },
        {
          username: 'Banana',
          message: '9999'
        }
      ],
      itemlist: [
        {title: 'Peach', description: 'fruits'},
        {title: 'Milkshake', description: 'beveages'},
        {title: 'Apple tea', description: 'tea'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
