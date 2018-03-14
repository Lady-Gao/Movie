import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        movies:[],
        moviestalk:{},
        cinemas:[]
    },
    mutations:{
        moveinit(state,paylade){
            state.movies = paylade.movies
        },
        movietalk(state,paylade){
            state.moviestalk = paylade.talk 
            
        },
        cinema(state,paylade){
            state.cinemas = paylade.cinemas 
        }
    },
    actions:{
        //电影条目
        async MOVEINIT({commit}){
            var res = await fetch("/api/movie/list.json").then(data=>data.json())
            commit("moveinit", {"movies":res.data.movies})
        },
        //影评
        async MOVIETALK({ commit },{id}) {
            var res = await fetch("/api/movie/" + id + ".json").then(data => data.json())
            commit("movietalk", {
                "talk": res.data.CommentResponseModel.hcmts})
        },
        //影院
        async CINEMA({ commit }) {
            var res = await fetch("/api/cinemas.json").then(data => data)
            commit("cinema", { "cinemas":res.data })
        }
    }
})