<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <p>User Food: {{ userFood }}</p>
        <button @click="editAge">111Edit Age</button>
        <button @click="foodFn()">Edit Food</button>
        <button @click="resetFn()">Reset Age through callback</button>
    </div>
</template>

<script>
	import {eventBus} from '../../../main';
	export default {
		props: {
			userAge: Number,
			resetFn: Function,
			userFood: String,
			foodFn: Function
		},
		methods: {
			editAge() {
				this.userAge = 30;
				//this.$emit('ageWasEdited', this.userAge); 
				// pass to parent component (custom event emit)
				eventBus.$emit('ageWasEdited', this.userAge);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
