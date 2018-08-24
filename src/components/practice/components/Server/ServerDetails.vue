<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server #{{server.id}} selected<br>Status: {{ server.status}}<br>
        <button @click="changeStatus">Change Status</button></p>
        <p>{{ serverStatus }}</p>
        
    </div>

</template>

<script>
	import {serverBus} from '../../../../main';
	export default {
		props: {
			serverStatus: String,
			id: Number,
			server: String
		},
		data: function() {
			return {
				server: null
			}
		},
		created() {
			serverBus.$on('serverSelected', (server) => {
				this.server = server;
			})
		},
		methods: {
			changeStatus() {
				this.server.status = 'Normal';
			}
		}

	}
</script>

<style>

</style>
