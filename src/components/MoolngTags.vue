<template>
  <Tabs type="card" closable @on-tab-remove="handleTabRemove" value="name1">
    <TabPane label="标签一" v-if="tab0" name="name1">
      <MoolngTable></MoolngTable>
    </TabPane>
    <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
    <TabPane label="标签三" v-if="tab2">

    </TabPane>
  </Tabs>
</template>
<script>
import MoolngTable from './MoolngTable'

export default {
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  components: {
    MoolngTable
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    },
    rigthOnClick (e) {
      console.info(e)
      // 获取鼠标X坐标
      var x = e.clientX
      // 获取鼠标Y坐标
      var y = e.clientY
      console.info('X:' + x + ',Y:' + y)
      console.info('右键')
    },
    leftOnClist () {
      console.info('on clike')
    }
  }
}
</script>

<style>
  .ivu-tabs-bar {
    margin-bottom: 0px;
  }
</style>
