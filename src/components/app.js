
Vue.component('c-menu', {
	template: '#menu',
	data: function (){
		return {
			fruitlist: [
				{title: 'orange', description: 'fruit'},
				{title: 'banana', description: 'fruit'},
				{title: 'melon', description: 'fruit'}
			]
		}
	}
})


Vue.component('c-structure', {
	template: '#structure',
	data: function (){
		return {
			itemlist: [
				{title: 'Peach', description: 'fruits'},
				{title: 'Milkshake', description: 'beveages'},
				{title: 'Apple tea', description: 'tea'}
			]
		}
	}
})

Vue.component('c-container', {
	template: '#content'
})



new Vue({
	el: '.app',
})