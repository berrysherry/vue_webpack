<template id="content">
  <div>
      <!-- <h5>Menu</h5> -->
      <!-- <p>{{msg}}</p> -->
      <li>{{loadfruit.name}}</li>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: ["loadfruit"],
  data () {
    return {
      msg: 'child content'
    }
  }
}
</script>