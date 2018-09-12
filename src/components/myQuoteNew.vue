<template>
	<div>
		<form>
			<div class="notepaper"><h4>Post-it! for Quote</h4>
			    <figure class="quote">
					<textarea v-model="quote" rows="3" placeholder="Quote Content"></textarea>
					<div class="row">
						<div class="col-xs-12 col-md-8">
							<input type="text" v-model="author" placeholder="Author (optional)">
						</div>
						<div class="col-xs-12 col-md-4">
							<button @click.prevent="addQuote">Add Quote</button>
						</div>
					</div>
				</figure>
			</div>
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