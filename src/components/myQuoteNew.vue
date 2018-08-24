<template>
	<div>
		<form>
			<textarea v-model="quote" rows="3"></textarea><br>
			<input type="text" v-model="author"><br>
			<button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
		</form>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				quote: '',
				author: '',
			}
		},
		methods: {
			addQuote() {
				if (this.quote.trim().length == 0) {
			        return //檢查是否為空值 若為空值就不增加
			      }
				this.$emit('quoteAdded', this.quote, this.author);
				this.quote = '';
				this.author = ''

			}
		}
	}
</script>

<style>

</style>