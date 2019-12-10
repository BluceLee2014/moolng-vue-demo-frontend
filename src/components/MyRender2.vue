<template>
    <button v-on:click='count++'>{{count}}</button>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'MyRender2'
}

Vue.component('my-div2', {
  data () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++"> but2 = {{count}}</button>'
})

</script>

<style>

</style>
