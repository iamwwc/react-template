import axios from 'axios'

class client {
  constructor(host) {
    this.host = host
  }

  async  apiGo(method,url, data){
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
  async fetchUser(fullpath) {
    const url = apiUrl(fullpath)
    return await apiGo("GET",url)
  }

  async update(path,data) {
    return await apiGo("POST",url,data)
  }
}

let c= null

export default function (host) {
  if (c !== null) 
    return c
  c = new client(host)
}