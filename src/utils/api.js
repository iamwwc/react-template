import axios from 'axios'

class client {
  constructor(host) {
    this.host = host
    if (process.env.NODE_ENV === 'production') {
      this.port = 443
    }else {
      this.port = 3030
    }
  }

  async  apiGo(method,url, data){
    let result = await axios.request({
      method,
      data,
      url
    })
    return {
      code: result.status,
      data: result.data
    }
  }

  apiUrl = path => `http://${this.host}:${this.port}${path}`
  async fetchUser(fullpath) {
    const url = this.apiUrl(fullpath)
    return await this.apiGo("GET",url)
  }

  async update(path,data) {
    return await this.apiGo("POST",this.url,data)
  }
}

let c= null

export default function (host) {
  if (c !== null) 
    return c
  c = new client(host)
  return c
}