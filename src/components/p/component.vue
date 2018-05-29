<template>
	<div>
		<header>{{title}}</header>
		<div>{{content}}</div>
	</div>
</template>

<script>
export default {
  name: 'mycontent',
  data () {
    return {
      title: 'Test',
      content: 'Component in test page'
    }
  }
}
</script>