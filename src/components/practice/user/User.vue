<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <button @click="changeColor">Change Color</button>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Color: {{ color }}</p>
        <p>Food: {{ food }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :propName="name" 
                @nameWasReset="name = $event"
                @colorWasReset="color = $event"
                :resetFn="resetName"
                :userAge="age"
                :propColor="color"
                :propFn="resetColor"
                :userFood="food"></app-user-detail>
                <!-- :resetFn="resetName" callback -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"
                    :resetFn="resetAge"
                    :userFood="food"
                    :foodFn="resetFood"></app-user-edit>
                    <!--from emit $event = updated age-->
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Melon',
                age: 28,
                color: 'red',
                food: 'pasta'
            };
        },
        methods: {
            changeName() {
                this.name = 'Mango'
            },
            changeColor() {
                this.color = 'blue'
            },
            resetColor() {
                this.color = 'red'
            },
            //callback method START
            resetName() {
                this.name = 'Berry'
            },
            resetAge() {
                this.age = 2888
            },
            resetFood() {
                this.food = 'rice'
            }
            // callback method END
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
