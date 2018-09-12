<template>
    <div class="container">
    	<quote-add @quoteAdded="newQuote"></quote-add>
        <hr>
    	<quote-grid :quotes="quotes" :propFn="deleteQuote"></quote-grid>
    </div>
</template>

<script>
	const config = {
    apiKey: "AIzaSyBWZtAb25ts2qeuaUOu48uAhi2yq5MMjzE",
    authDomain: "vue-quote.firebaseapp.com",
    databaseURL: "https://vue-quote.firebaseio.com",
    projectId: "vue-quote",
    storageBucket: "vue-quote.appspot.com",
    messagingSenderId: "739134491665"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const quotesRef = database.ref('quotes')

  	// const quoteRef = firebase.database().ref('/quotes/');
	import MyQuoteGrid from './MyQuoteGrid';
	import MyQuoteNew from './MyQuoteNew';
    export default {
    	
        data: function() {
        	return {
        		quotes: [],
        		// quotes: [
        		// 	{
        		// 		content: 'Test',
        		// 		author: 'Sherry'
        		// 	},
        		// 	{
        		// 		content: 'Test2',
        		// 		author: 'Sherry'
        		// 	},
        		// ],
        		maxQuotes: 10
        	}
        },
        methods: {
        	newQuote(quote, author) {
        		// this.quotes.push({content: quote,author: author});
        		quotesRef.push().set({content: quote,author: author});
        	},
        	deleteQuote(quote) {
        		// this.quotes.splice(index, 1);
        		quotesRef.child(quote.id).remove()
        	}
        },

        created () {
        	//value = snapshot.val() | key = snapshot.key
        	quotesRef.on('child_added', snapshot => this.quotes.push({...snapshot.val(), id: snapshot.key}))
        	quotesRef.on('child_removed', snapshot => {
        		const deletedQuote = this.quotes.find(quote => quote.id === snapshot.key)
        		const index = this.quotes.indexOf(deletedQuote)
        		this.quotes.splice(index, 1);
        	})

        },

        components: {
    		quoteGrid: MyQuoteGrid,
    		quoteAdd: MyQuoteNew,
    	},
    }
</script>

<style>
</style>
