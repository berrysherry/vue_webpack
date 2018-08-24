<template>
	<div>
		<li class="list-group-item"
			style="cursor: pointer"
			@click="serverSelected">
	        Server #{{ server.id }} - {{ serverName }}<br>
	        Status: {{ serverStatus }}
		</li>
	</div>
</template>
<script>
	import {serverBus} from '../../../../main';
	export default {
		data: function(){
			return {
			message: '',
			serverStatus: ''
			}
		},
		props: ['server','serverName','serverStatus'],
		methods: {
			serverSelected() {
				serverBus.$emit('serverSelected', this.server);
				console.log(this.serverName+' is selected');
			}
		}
	}
</script>