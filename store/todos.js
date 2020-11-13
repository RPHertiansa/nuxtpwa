const state = () => {
  return {
    list: []
  }
}

const getters = {
  todos (state) {
    return state.list
  }
}

const mutations = {
  add (state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },

  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
