<template>
    <div class="container">
    	<quote-add @quoteAdded="newQuote"></quote-add>
    	<quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    </div>
</template>

<script>
	// const quoteRef = firebase.database().ref('/quotes/');
	import MyQuoteGrid from './MyQuoteGrid';
	import MyQuoteNew from './MyQuoteNew';
    export default {
    	
        data: function() {
        	return {
        		// quotes: [],
        		quotes: [
        			{
        				content: 'Test',
        				author: 'Sherry'
        			},
        			{
        				content: 'Test2',
        				author: 'Sherry'
        			},
        		],
        		maxQuotes: 10
        	}
        },
        methods: {
        	newQuote(quote, author) {
        		this.quotes.push({content: quote,author: author});
        	},
        	deleteQuote(index) {
        		this.quotes.splice(index, 1);
        	}
        },
        components: {
    		quoteGrid: MyQuoteGrid,
    		quoteAdd: MyQuoteNew,
    	},
    }
</script>

<style>
</style>
