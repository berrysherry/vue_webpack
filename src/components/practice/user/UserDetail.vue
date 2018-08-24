<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- <p>User Name: {{ propName }}</p> -->
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <p>User Color: {{ propColor }}</p>
        <p>User Food: {{ userFood }}</p>
        <button @click="resetName">RESET to Melon</button>
        <button @click="resetColor">RESET color</button>
        <button @click="resetFn()">RESET</button>
        <button @click="propFn()">reset color</button>
        <!-- resetFn() callback -->
    </div>
</template>

<script>
	import {eventBus} from '../../../main';
	export default {
		props: {
			propName: {
				type: String
			},
			resetFn: Function, // callback method
			userAge: Number,
			propColor: String,
			propFn: Function,
			userFood: String
		},
		methods: {
			switchName() {
				return this.propName.split("").reverse().join("");
			},
			resetName() {
				this.propName = 'Melon';
				this.$emit('nameWasReset', this.propName);
			},
			resetColor() {
				this.propColor = 'red';
				this.$emit('colorWasReset', this.propColor);
			},
		},
		created() {
			eventBus.$on('ageWasEdited', (dataaa) => {
				this.userAge = dataaa;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
