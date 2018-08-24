<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedColor = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedColor = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedColor = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedColor">
                    <p slot="blue">
                        <b>Cotton Candy Cupcake</b><br>
                        <img src="../assets/img/fancycupcake1.jpg">
                    </p>

                    <p slot="green">
                        <b>Birthday Cupcake</b><br>
                        <img src="../assets/img/fancycupcake2.jpg">
                    </p>
                    
                    <p slot="red">
                        <b>Choco Berry Cupcake</b><br>
                        <img src="../assets/img/fancycupcake3.jpg">
                    </p>
                </component>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './color/Blue.vue';
    import Green from './color/Green.vue';
    import Red from './color/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return {
                selectedColor: 'appBlue'
            }
        }
    }
</script>

<style>
</style>
