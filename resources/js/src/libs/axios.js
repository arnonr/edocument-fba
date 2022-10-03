import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'http://localhost/api/',
  // baseURL: 'http://edoc.fba.kmutnb.ac.th/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
//   headers: {"Content-Type": "multipart/form-data"}
})

Vue.prototype.$http = axiosIns

export default axiosIns



