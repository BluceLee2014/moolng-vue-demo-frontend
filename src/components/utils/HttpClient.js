import axios from 'axios'

// var requestHandler = {
//   success: () => {
//   },
//   method: '',
//   url: '',
//   data: {},
//   header: {}
// }
export default {
  request,
  data () {
    return {
      resultData: []
    }
  }
}

export function request (requestHandler) {
  if (requestHandler.method === 'GET') {
    console.info('GET')
    console.info(requestHandler)
    GET(requestHandler)
  } else if (requestHandler.method === 'POST') {
    console.info('POST')
    POST(requestHandler)
  }
}

export function GET (requestHandler) {
  axios.get(requestHandler.url)
    .then(function (res) {
      console.info(res)
      requestHandler.success(res)
    }).catch(function (error) {
      console.info(error)
      requestHandler.fail()
    })
}

export function POST (requestHandler) {
  axios.post(requestHandler.url, requestHandler.data)
    .then(function (res) {
      console.info(res)
      requestHandler.success(res)
    }).catch(function (error) {
      console.info(error)
      requestHandler.fail()
    })
}
