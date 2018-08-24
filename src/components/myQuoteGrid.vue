<template>
	<div class="row">
		<quote-content v-for="(quote, index) in quotes">{{ quote.content }}<span v-if="quote.author!=''"> by {{ quote.author }}</span> <span @click="deleteQuote(index)">&times;</span></quote-content>
	</div>
</template>

<script>
	import MyQuoteContent from './MyQuoteContent';
	export default {
		
		props: ['quotes'],
		components: {
			quoteContent: MyQuoteContent,
		},
		data: function() {
			return {
				
			}
		},
		methods: {
			deleteQuote(index) {
				this.$emit('quoteDeleted', index);
			}
		}
	}
</script>

<style>

</style>