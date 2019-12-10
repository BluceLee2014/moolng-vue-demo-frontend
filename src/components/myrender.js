import Vue from 'vue'

export default {}

Vue.component('my-div', {
  functional: true,
  props: {
    level: {
      type: Number
    },
    mtext: {
      type: String,
      required: true
    }
  },
  // render: function (createElement, context) {
  //   ole.info('-------------------------')
  //   console.info(context)
  //   console.info(context.children[0].text)
  //   console.info(context.props)
  //   console.info('-------------------------')
  //   retuconsrn createElement('div', context.children[0].text)
  // }
  render: (h, c) => {
    return h('h' + c.props.level, c.children[0].text)
  }
})
