import axios from "axios"
const userlist = {
    state: {
        user: '超級管理員'
    },
    actions: {
        getuser1({ commit }) {
            // axios.get("url", "data").then((res) => {
            //     commit("SET_NAME", res.name)
            // })
            commit("SET_NAME")
        }
    },
    mutations: {
        SET_NAME(state, name) {
            // state.user = name
        }
    }
}

export default userlist