<template>
  <div>
    <!--    <Button v-on:click="onAjax">点击</Button>-->
    <Table :columns="columns7" :data="data1" border></Table>
    <Page :total="page.total" :current="page.current" :page-size="page.pageSize" @on-change="handlePage"
          @on-page-size-change='handlePageSize'
          :styles="{padding: '10px', float: 'right'}" show-sizer/>
  </div>
</template>
<script>
import HttpClient from './utils/HttpClient'

export default {
  data () {
    return {
      columns7: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              this.myRender(h, params, 'Button', 'View', this.clickShow, this.cshow),
              this.myRender(h, params, 'Button', 'Delete', this.clickDel, this.cdel)
            ])
          }
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      data1: [],
      page: {
        total: 0,
        pageSize: 10,
        current: 1
      }
    }
  },
  methods: {
    handlePage (value) {
      console.info('handlePage', value)
      this.onAjax(value)
    },
    handlePageSize () {
      console.info('handlePageSize')
    },
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove1 (index) {
      this.data1.splice(index, 1)
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    onAjax (current) {
      HttpClient.request({
        success: (res) => {
          // this.$data.items = res.data
          this.$data.data1 = res.data.data
          this.$data.page = res.data.page
          console.info(this.$data.data6)
          console.info(res.data.data)
        },
        method: 'POST',
        url: '/api/getData2',
        data: {
          'current': current,
          'pageSize': 10
        },
        header: {}
      })
      // var resultVal = httpclient.httpGet('/api/getData')
      // console.info(resultVal)
      // this.$data.val = resultVal
    },
    removeAjax (obj, params) {
      HttpClient.request({
        success: (res) => {
          let status = res.data.code
          if (status === 200) {
            console.info('删除成功', params, params.index)
            this.remove1(params.index)
          }
        },
        method: 'GET',
        url: '/api/remove?id=' + params.row.id,
        data: {
          'id': params.row.id
        },
        header: {}
      })
    },
    one () {
      console.info('one')
    },
    two () {
      console.info('two')
    },
    myRender (h, params, button, name, fun, fun2) {
      return h(button, fun2(params, fun), name)
    },
    clickShow (params) {
      this.show(params.index)
    },
    clickDel (params) {
      this.removeAjax(this, params)
    },
    cshow (params, fun) {
      return {
        props: {
          type: 'primary',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => fun(params)
        }
      }
    },
    cdel (obj, params) {
      return {
        props: {
          type: 'error',
          size: 'small'
        },
        on: {
          click: () => {
            console.info(params)
            // this.remove(params.index)
            // this.removeAjax(this, params)
            this.clickDel(obj, params)
          }
        }
      }
    }
  },
  created () {
    this.onAjax(1)
    this.two()
  },
  mounted () {
    this.one()
  }
}
</script>
