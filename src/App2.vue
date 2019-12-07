<template>
  <div id="app">
    <MoolngLoyout></MoolngLoyout>
    <my-button title="B1"></my-button>
    <my-button title="B2"></my-button>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import MoolngLoyout from './Layout.vue'

export default {
  name: 'App',
  components: {
    MoolngLoyout
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
