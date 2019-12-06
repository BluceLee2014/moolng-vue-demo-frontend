import Vue from 'vue'

Vue.component('my-button', {
  data: function () {
    return {count: 0}
  },
  props: {
    'title': String
  },
  template: '<button v-on:click="count++">{{title}} 点击计算{{count}}</button>'
})

export default {}
