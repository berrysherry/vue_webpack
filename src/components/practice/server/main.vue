<template>
    <div>
        <div class="row">
            <app-header></app-header>
        </div>
        <hr>
        <div class="row">
            <app-server></app-server>
            <app-server-status></app-server-status>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './Header'
    import Server from './Server'
    import Serverstatus from './Serverstatus'
    import Footer from './Footer'

    export default {
        name: 'App',
        components: {
            'app-header': Header, 'app-server': Server, 'app-server-status': Serverstatus, 'app-footer': Footer
        }
    }
</script>

<style>

</style>
