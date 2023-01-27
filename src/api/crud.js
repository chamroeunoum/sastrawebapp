import axios from "axios"
// import { getAuthorization } from "../plugins/authentication"
export default {
  async list(url,params){
    return await axios({
      method: 'GET' ,
      url: url ,
      data: params ,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async read(url,params){
    return await axios({
      method: 'GET' ,
      url: url ,
      data: params,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async readUnauth(url,params){
    return await axios({
      method: 'GET' ,
      url: url ,
      data: params
    })
  },
  async create(url,params){
    return await axios({
      method: 'POST' ,
      url: url ,
      data: params,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async update(url,params){
    return await axios({
      method: 'PUT' ,
      url: url ,
      data: params,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async delete(url,params){
    return await axios({
      method: 'DELETE' ,
      url: url ,
      data: params,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async upload(url,formData ){
    return await axios.post( url , formData ,
      { 
        headers: {
          Authorization : getAuthorization() ,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  },
  async compact(url){
    return await axios({
      method: 'GET' ,
      url: url ,
      data: params ,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
  async activate(api){
    return await axios({
      method: 'PUT' ,
      url: url ,
      data: params,
      // headers: {
      //   'Authorization' : getAuthorization()
      // }
    })
  },
}