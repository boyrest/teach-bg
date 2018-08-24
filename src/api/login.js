import request from '@/utils/request'

export function login(username, password) {
  let body = {
    email: username,
    userPwd: password
  }
  return request({
    url: '/login/do_login',
    method: 'post',
    data: body
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        roles: "admin",
        name: "admin",
        avatar: "http://sha-oss-static.oss-cn-shanghai.aliyuncs.com/0cffa9e4-fee1-4ada-8a46-febf5ec89133"
      }
    })
  })
}
