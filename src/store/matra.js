import crud from '../api/crud'

// initial state
const state = () => ({
  model: {
    name: "matras" ,
    title: "មាត្រា" 
  },
  records: [] ,
  record: null ,

})

// getters
const getters = {
  getRecords (state, getters, rootState) {
    return state.records
  },
  getRecord (state, getters, rootState) {
    return state.record
  }
}

// actions
const actions = {
  async list ({ state, commit, rootState },params) {
    return await crud.list(rootState.apiServer+"/webapp/"+state.model.name + "?" + new URLSearchParams({
        // regulator_id: params.regulator_id ,
        // kunty_id: params.kunty_id ,
        // matika_id: params.matika_id ,
        // chapter_id: params.chapter_id ,
        // part_id: params.part_id ,
        // section_id: params.section_id ,
        search: params.search ,
        perPage: params.perPage ,
        page: params.page ,
      }).toString()
    )
  },
  async read ({ state, commit, rootState },params) {
    return await crud.read(rootState.apiServer+"/webapp/"+state.model.name+"/"+params.id)
  },
  async compact ({ state, commit, rootState },params) {
    return await crud.list(rootState.apiServer+"/webapp/"+state.model.name + "/compact" + ( params !== undefined ? "?" + new URLSearchParams({
      page: params.page ,
      perPage : params.perPage ,
      search: params.search ,
    }).toString(): ""))
  },
}

// mutations
const mutations = {
  // increment (state) {
  //   // `state` is the local module state
  //   state.count++
  // }
  setRecords (state, records) {
    state.records = records
  },
  setRecord (state, record) {
    state.record = record
  },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}