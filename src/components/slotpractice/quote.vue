<template>
    <div>
    	<div class="title">
        	<slot name="title2"></slot>
        	<span style="color: #CCC">subtitle</span>
        </div>
        <hr>
        <slot name="content2"></slot>
        <hr>
        <slot name="title"></slot>
    </div>
</template>

<script>

    export default {
        props: ['quote']
    }
</script>

<style scoped>
	h2 {
		color: blue;
	}
	.title {
		font-style: italic;
	}
</style>
