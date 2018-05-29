<template id="content">
  <div>
      <h3>I am c-content</h3>      
  </div>
</template>

<script>
export default {
  name: 'contentv',
  data () {
    return {
      itemlist: [
        {title: 'Peachq', description: 'fruits'},
        {title: 'Milkshake', description: 'beveages'},
        {title: 'Apple tea', description: 'tea'}
      ],
      pmsg: 'parent msg'
    }
  }
}
</script>