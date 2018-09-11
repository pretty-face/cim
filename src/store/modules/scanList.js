import axios from 'axios'
const sacnList = {
    state: {
        list: []
    },
    actions: {
        getlist ({ commit }) {
            axios.get('static/mock/data.json').then((res) => {
                console.log(res.data.list)
                commit("GETLIST_FC",res.data.list)
            })
        }
    },
    mutations: {
        GETLIST_FC (state,list) {
            state.list = list
        }
    }
}
export default sacnList