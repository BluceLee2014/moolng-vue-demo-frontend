<template>
  <tabs type="card" :style="{margin: '10px 10px 0 10px'}">
    <tab-pane label="首页">
      <index></index>
    </tab-pane>
    <TabPane closable v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
  </tabs>
</template>

<script>
import index from './index'

export default {
  name: 'MoolngIndexTabs',
  data () {
    return {tabs: 2
    }
  },
  props: {
    goToUri: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleTabsAdd () {
      this.tabs++
    }
  },
  components: {
    index: index
  }
}
</script>

<style scoped>

</style>
