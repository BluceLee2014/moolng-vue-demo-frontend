import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MoolngTable2 from '@/components/MoolngTable2'
import MoolngIndex from '@/components/index'
import MoolngTabs from '@/components/MoolngTabs'
import Header from '../components/header'
import Center from '../components/center'
import Footer from '../components/footer'

/**
 * 重写路由的push方法
 */
// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MoolngIndex',
      component: MoolngIndex
    },
    {
      path: '/list',
      components: {
        routerDataList: MoolngTable2
      }
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: MoolngTabs
    },
    {
      path: '/a1',
      components: {
        header: Header,
        center: Center,
        footer: Footer
      }
    }
  ]
})
