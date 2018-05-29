<template id="content">
  <div>
      <!-- <h5>Menu</h5> -->
      <!-- <p>{{msg}}</p> -->
      <li>{{loadmsg.title}}</li>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: ["loadmsg"],
  data () {
    return {
      msg: 'child content'
    }
  }
}
</script>