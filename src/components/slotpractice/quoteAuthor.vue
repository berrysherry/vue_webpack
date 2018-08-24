<template>
    <div>
        <h3>The Author</h3>
        <span>{{ counter }}</span><button @click="counter++">PLUS</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('destroyed!!')
        },
        deactivated() {
            console.log('Deactivated!');
        },
        activated() {
            console.log('Activated!');
        },
    }
</script>

<style scoped>
</style>
