import axios from 'axios'

class client {
  constructor(host) {
    this.host = host
  }

  async function apiGo(method,url, data){
    let result = await axios.request({
      method,
      data,
      url
    })
    return {
      code: result.code,
      data: result.data
    }
  }

  apiUrl = path => `http://${host}/${path}`
  async function fetchUser(path) {
    const url = apiUrl(path)
    return await apiGo("GET",url)
  }

  async function update(path,data) {
    return await apiGo("POST",url,data)
  }
}