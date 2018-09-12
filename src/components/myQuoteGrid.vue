<template>
	<div id="list">
		<quote-content v-for="(quote, index) in quotes"><!-- {{index}}  --><span @click="propFn(quote)" style="float:right">&times;</span><br><span class="curly-quotes">{{ quote.content }}</span><span v-if="quote.author!=''" class="author">— {{ quote.author }}</span> </quote-content>
	</div>
</template>

<script>
	import MyQuoteContent from './MyQuoteContent';
	export default {		
		props: {quotes: Array, propFn: Function},
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