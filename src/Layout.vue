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
          <Menu width="auto" theme="dark" :class="menuitemClasses" @on-select="openMenu2">
            <menu-item v-for="m in menuData" :name="m.id" :key="m.id">
              <Icon :type="m.icon"></Icon>
              <span>{{m.name}}</span>
            </menu-item>
          </Menu>
          <button v-on:click="openMenu">测试</button>
        </Sider>
        <Layout>
          <Content :style="getContentStyle()">
            <!--            <MoolngTable></MoolngTable>-->
            <!--            <MoolngTags></MoolngTags>-->
            <!--            <router-view></router-view>-->
            <!--            <MoolngIndexTabs v-bind:goToUri="menuData" ></MoolngIndexTabs>-->
            <tabs type="card" :style="{margin: '10px 10px 0 10px'}">
              <tab-pane label="首页">
<!--                <router-view name="routerDataList"></router-view>-->
                <p>{{ $route.name }}</p>
              </tab-pane>
              <TabPane closable v-for="tab in mtabs" :key="tab.id" :label="'标签' + tab.name">
<!--                <router-link to="/list">跳转到指定Tab + {{tab.routerName}}</router-link>-->
                <router-view :name="tab.routerName"></router-view>
              </TabPane>
            </tabs>
            <!--            <router-link to="/tabs">跳转到指定Tab</router-link>-->
            <!--            <router-view></router-view>-->
            <!--            <router-view></router-view>-->
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
// import MoolngIndexTabs from './components/MoolngIndexTabs'

export default {
  name: 'MoolngLayout2',
  data () {
    return {
      mcount: 0,
      mtabs: [
        {
          id: 0,
          name: '',
          routerName: '',
          uri: ''
        }
      ],
      isCollapsed: false,
      contentStyleObj: {
        height: ''
      },
      menuData: [
        {
          id: 1,
          icon: 'ios-navigate',
          name: '用户管理',
          routerName: 'routerDataList',
          uri: '/list'
        },
        {
          id: 2,
          icon: 'ios-search',
          name: '查找',
          // routerName: 'MoolngIndex',
          uri: '/'
        },
        {
          id: 3,
          icon: 'ios-settings',
          name: '设置',
          // routerName: 'tabs',
          uri: '/tabs'
        }
      ]
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
      return 'height:' + this.getHeight() + '; margin: 10px 10px 0px 10px; background: rgb(255, 255, 255); border-radius:5px;'
    },
    pushParam () {
      console.info(this)
    },
    openMenu (obj) {
      console.info('openMenu')
      this.$router.replace('/list')
      // console.info('openMenu')
      // console.info(obj)
      // console.info(this)
      // this.data.mtabs.push()
    },
    openMenu2 (index) {
      console.info('openMenu2')
      var obj = this.$data.menuData[index - 1]
      console.info(obj)
      // console.info(this.$ref.dataNum.dataset.msg)
      var count = this.$data.mcount
      // console.info(++count)
      this.$data.mcount = ++count
      this.$data.mtabs.push({
        id: count,
        name: '名称' + count + obj.name + ':' + obj.uri + ':' + obj.routerName,
        uri: obj.uri,
        routerName: obj.routerName
      })
      console.info(obj.uri)
      // setTimeout(this.openMenu, 1000)
      this.$router.replace(obj.uri)
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
