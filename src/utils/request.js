import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store'
import Cookies from 'js-cookie'

const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 70000 // 请求超时时间
})

service.interceptors.request.use(
  config => {
    if (Cookies.get('token')) {
      config.headers['token'] = Cookies.get('token');
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.data.status == 401) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      })
    }
    return response;
  },
  error => {
    if (error.response && error.response.status !== undefined) {
      switch (error.response.status) {
        case 401:
          MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('FedLogOut').then(() => {
              location.reload()// 为了重新实例化vue-router对象 避免bug
            })
          })
          break;
      }
    }
    return error;
  })



export default service


