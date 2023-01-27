import { createStore, createLogger } from 'vuex'
const debug = process.env.NODE_ENV !== 'production'

import matra from './matra'

export default createStore({
  state: {
    // apiServer: 'http://sctservice.kabit.asia/api'
    // apiServer: 'http://127.0.0.1:8000/api'
    apiServer: 'http://127.0.0.1:8000/api' ,
    // branch: ''
  },
  modules: {
    matra
  },
  strict: debug,
  plugins: debug ? 
    [
      createLogger()
    ] : 
    [
      
    ]
})