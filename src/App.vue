<template>
  <div id="app">
    <div id="line" style="background:url('https://shop.masking-tape.jp/common/img/bg_slash-pinkgreen.gif') repeat-x 0 bottom #ffffff; height: 14px;"></div>
  <div class="bg-light ">
    <div class="nav-wrap">
    <b-navbar toggleable="lg" type="light" variant="light">
  
  <b-navbar-brand href="/">BERRY FIELD</b-navbar-brand>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <router-link :to="'22'" class="nav-link">222</router-link>
      <router-link :to="'test'" class="nav-link">Test</router-link>
      <router-link :to="'loadapi'" class="nav-link">Load Api</router-link>
      <router-link :to="'loadcafeapi'" class="nav-link">Cafe Api</router-link>
      <router-link :to="'loadcafeapi_taichung'" class="nav-link">Taichung Cafe Api</router-link>
      <router-link :to="'table'" class="nav-link">table</router-link>
      <router-link :to="'loadgroupweatherapi'" class="nav-link">group Weather</router-link>
      <router-link :to="'loadnowweatherapi'" class="nav-link">NOW Weather</router-link>
      <!-- <router-link :to="'main'" class="nav-link">Practice</router-link> -->
      <router-link :to="'usermain'" class="nav-link">Practice - User</router-link>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
<!-- navbar-1.vue -->
  </div>
  <div id="banner"></div>
    <div id="body" class="container">
      <p slot="header">Header Component End</p><!--這行決定出現位置-->
      <router-view></router-view>     
    </div><footercomponent></footercomponent>
  </div>

</template>

<script>
  import Footercomponent from './components/Footercomponent'
  export default {
  name: 'App',
  components: {
    Footercomponent,
  },
}

</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~vue2-animate/src/sass/vue2-animate.scss";
</style>

<style>
@import "./assets/css/weather-icons";
@import "./assets/css/fontawesome-all";
@import "./assets/bootstrap-vue/dist/bootstrap-vue";
@import "./assets/scss/style";
/*@import "./assets/css/base";*/

</style>
