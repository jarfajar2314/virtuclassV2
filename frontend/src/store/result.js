// import Vue from "vue";
const state = {
    bookmarks: JSON.parse(window.localStorage.getItem('bookmarks')),
    accessToken: '',
    role: '',
    userData: {}
}

const getters = {
    getBookmarks: state => {
        return state.bookmarks
    },
    getAccessToken: state => state.accessToken,
    getRole: state => state.role,
    getUserData: state => state.userData,
}

const actions = {
    // async fetchSearchResult ({ commit }, searchItem) {
    //     const res = await Vue.axios.get(`https://api.edamam.com/search?q=${searchItem}`)
    //     const results = res.data.hits
    //     commit('updateSearchResults', results)
    // },
    async fetchSearchItem ({ commit }, item) {
        commit('updateSearchItem', item)
    }
}

const mutations = {
    updateSearchResults: (state, results) => {
        state.searchResults = results
    },
    updateSearchItem: (state, item) => {
        state.searchParam = item
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}