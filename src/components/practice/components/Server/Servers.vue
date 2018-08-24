<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
	            v-for="server in servers"
	            :id="server.id"
	            :serverName="server.name"
	            :serverStatus="server.status"
	            :changeFn="changeStatus"
	            :server="server">
            </app-server>
        </ul>
    </div>
</template>

<script>
	import Server from './Server.vue';
	export default {
		components: {
            appServer: Server,
        },

		data: function() {
			return {
				servers: [
					{id: 1, name: 'Apple', status: 'Normal'},
					{id: 2, name: 'Banana', status: 'Critical'},
					{id: 3, name: 'Citrus', status: 'Unknown'},
					{id: 4, name: 'Duck', status: 'Normal'},
					{id: 5, name: 'Egg', status: 'Critical'}
				],
			}
		},
		methods: {
			changeStatus() {
				this.serverStatus = 'Normal'
			}
		}
	}
</script>

<style>

</style>
