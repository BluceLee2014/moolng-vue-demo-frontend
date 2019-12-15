<template>
  <Header>
    <div class="layout-logo"></div>
    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
          size="24"></Icon>
  </Header>
  <!--    <Header>-->
  <!--      <h1>Header</h1>-->
  <!--    </Header>-->
</template>

<script>
import {Header} from 'view-design'
import {Icon} from 'view-design'

export default {
  name: 'LayoutHeader',
  components: {
    Header,
    Icon
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style scoped>

</style>
