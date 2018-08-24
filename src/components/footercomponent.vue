<template>
	<div id="footer">
		<span>{{title}}</span>
		<div>{{content}}</div>
	</div>
</template>

<script>
export default {
  name: 'Footercomponent',
  data () {
    return {
      title: '-----',
      content: "Hi I'm FOOTER component :D"
    }
  }
}
</script>