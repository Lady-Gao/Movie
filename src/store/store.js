import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        movies:[],
        moviestalk:{},
        cinemas:[],
        placeNm:"",
        movieId:"",
        chooseSet:''
    },
    mutations:{
        moveinit(state,paylade){
            state.movies = paylade.movies
        },
        movietalk(state,paylade){
            state.moviestalk = paylade.talk 
            state.movieId = paylade.id 
            
        },
        cinema(state,paylade){
            state.cinemas = paylade.cinemas 
        },
        //地区电影院数组
        allPlace(state, paylade) {
            state.placeNm = paylade.place
        },
        //当前影院的电影放映
        chooseSet(state, paylade) {
            state.chooseSet = paylade.chooseSet
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
                "talk": res.data.CommentResponseModel.hcmts, "id": id})
        },
        //影院
        async CINEMA({ commit }) {
            var res = await fetch("/api/cinemas.json").then(data => data.json())
             commit("cinema", { "cinemas":res.data })
        },
        //选座
        async CHOOSESET({ commit },payload) {
            var cid = payload.cinemaid
            var mid = payload.movieid
            var res = await fetch("api/showtime/wrap.json?cinemaid=" + cid+"&movieid=" + mid).then(data => data.json())
            commit("chooseSet", { "chooseSet":res })
        },
    },
    getters:{
        placeNm(state){
            for (const key in state.cinemas) {
                if (state.cinemas.hasOwnProperty(state.placeNm)) {
                    return state.cinemas[key]
                }
            }
            
            
        }
    }
})