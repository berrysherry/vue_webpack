<template id="content">
  <div>
      <h3>I am c-content</h3>    
  </div>
</template>

<script>
export default {
  name: 'content',
  props: ["drink"],
  data () {
    return {
      itemlist: [
        {title: 'Peach', description: 'fruits'},
        {title: 'Milkshake', description: 'beveages'},
        {title: 'Apple tea', description: 'tea'}
      ]
    }
  }
}
</script>