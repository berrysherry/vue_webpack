<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            	<button @click="selectedComponent = 'appQuote'">Quote</button>
            	<button @click="selectedComponent = 'appAuthor'">Author</button>
            	<button @click="selectedComponent = 'appNew'">New</button>
            	<!-- <p>{{ selectedComponent }}</p> -->
            	<keep-alive>
	            	<component :is="selectedComponent">
	            		<h2 slot="title2">quote practice</h2>
	               		<p slot="content2">practicing named slot</p>
	            	</component>
	            </keep-alive>
            	<!-- <div slot="title">
            		<h2>{{ quoteTitle }}</h2>
            		<p>content</p>
            	</div> -->

                <!-- <app-quote>
               		<h2 slot="title2">quote practice</h2>
               		<p slot="content2">practicing named slot</p>
                </app-quote>
                <app-author></app-author> -->
            </div>
        </div>
    </div>
</template>

<script>
	import Quote from './Quote.vue'
	import QuoteAuthor from './QuoteAuthor.vue'
	import QuoteNew from './QuoteNew.vue'

    export default {
        components: {
        	appQuote: Quote,
        	appAuthor: QuoteAuthor,
        	appNew: QuoteNew,
        },
        data: function() {
        	return {
        		quoteTitle: 'A wonderful quote!',
        		selectedComponent: 'appQuote'
        	}
        }
    }
</script>

<style scoped>
	h2 {
		color: red;
	}
</style>
