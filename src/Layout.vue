<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .ivu-layout-header {
    background: #fff;
    padding: 0px;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    right: 20px;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
    padding: 0px 0px 0px 80px;
  }

  .rotate-icon {
    transform: rotate(-90deg);
    padding: 0px 0px 0px 0px;
  }

  /*.ivu-layout-content {*/
  /*  height: 1000px;*/
  /*}*/

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-logo"></div>
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
              size="24"></Icon>
      </Header>
      <Layout>
        <Sider ref="side1" breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <menu-item name="1-1">
              <Icon type="ios-navigate"></Icon>
              <span>Option 1</span>
            </menu-item>
            <menu-item name="1-2">
              <Icon type="ios-search"></Icon>
              <span>Option 2</span>
            </menu-item>
            <menu-item name="1-3">
              <Icon type="ios-settings"></Icon>
              <span>Option 3</span>
            </menu-item>
          </Menu>
        </Sider>
        <Layout>
          <Content :style="getContentStyle()">
            <!--            <MoolngTable></MoolngTable>-->
            <MoolngTags></MoolngTags>
          </Content>
        </Layout>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>

    </Layout>

  </div>
</template>
<script>
// import MoolngTable from './components/MoolngTable'
import MoolngTags from './components/MoolngTags'

export default {
  name: 'MoolngLayout',
  data () {
    return {
      isCollapsed: false,
      contentStyleObj: {
        height: ''
      }
    }
  },
  components: {
    // MoolngTable,
    MoolngTags
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    getHeight () {
      this.contentStyleObj.height = window.innerHeight - 70 + 'px'
      console.info(this.contentStyleObj.height)
      return this.contentStyleObj.height
    },
    getContentStyle () {
      // return 'height:' + this.getHeight() + '; margin: 20px; background: rgb(255, 255, 255);'
      return 'height:' + this.getHeight() + '; margin: 20px 20px 0px 20px; background: rgb(255, 255, 255);'
    }
  },
  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  }
}
</script>
