<template>
  <Tabs type="card" value="index">
    <TabPane label="首页" name="index">
      <MoolngIndex></MoolngIndex>
    </TabPane>
    <TabPane label="标签一" v-if="tab0" closable>
      <MoolngTable></MoolngTable>
    </TabPane>
    <TabPane label="标签二" v-if="tab1" name="name1" closable>
      <my-div :level=1 mtext="A1">L1</my-div>
      <my-div :level=5 mtext="A2">L5</my-div>
      <my-div2></my-div2>
    </TabPane>
    <TabPane label="标签三" v-if="tab2" closable>
      <div @contextmenu.prevent="rigthOnClick">aaaa</div>
    </TabPane>
    <TabPane label="标签四" v-if="tab3" closable>
      <MoolngTable2></MoolngTable2>
    </TabPane>
  </Tabs>
</template>
<script>
import MoolngTable from './MoolngTable'
import MoolngTable2 from './MoolngTable2'
import MoolngIndex from './index'

import MyRender from './myrender'
import MyRender2 from './myrender2'

export default {
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true,
      tab3: false
    }
  },
  components: {
    MoolngIndex,
    MoolngTable,
    MoolngTable2,
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
