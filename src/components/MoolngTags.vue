<template>
    <Tabs v-on:click="rigthOnClick" type="card" closable @on-tab-remove="handleTabRemove" value="name1">
        <TabPane label="标签一" v-if="tab0" >
            <MoolngTable></MoolngTable>
        </TabPane>
        <TabPane label="标签二" v-if="tab1" name="name1">
            <my-div :level=1 mtext="A1">L1</my-div>
            <my-div :level=5 mtext="A2">L5</my-div>
            <my-div2></my-div2>
        </TabPane>
        <TabPane label="标签三" v-if="tab2">
            <div @contextmenu.prevent="rigthOnClick">aaaa</div>
        </TabPane>
    </Tabs>
</template>
<script>
import MoolngTable from './MoolngTable'

import MyRender from './myrender'
import MyRender2 from './myrender2'

export default {
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  components: {
    MoolngTable,
    MyRender,
    MyRender2
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
