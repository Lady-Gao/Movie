<template>
   <div v-if="showBtn">    
         <div class="header" >
            <mu-switch   class="demo-switch"  v-model="toggle"/><br/>
        </div>
        <div class="Cinema" v-height="90">
     <div class="list">
         <mu-grid-list class="gridlist-demo">
        <mu-grid-tile v-for="(tile,index) in list" :key="index" >
            <img @click="showCinema(tile)" src="http://imgsrc.baidu.com/image/c0%3Dpixel_huitu%2C0%2C0%2C294%2C40/sign=8872ba0170f40ad101e9cfa33e5474b3/7acb0a46f21fbe09e96a4e2d60600c338744add7.jpg"/>
        <span slot="title" ><b>{{tile}}</b></span>
        <span slot="subTitle">by</span>
        <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
  </mu-grid-list>
     </div>
    </div>
    <transition name="fade">
     <div class="place" v-if="cinema.cinema">
        <VueAllCinema :cinema="cinema"></VueAllCinema>
     </div>
     </transition>
   </div>
</template>

<script>
import VueAllCinema from './allCinema.vue'
    export default {
        props:["isshow"],
        data(){
            return {
                //单个地区所有影院
               cinema:{cinema:false,place:""},
                showBtn:true,
                toggle:false
            }
        },
        created(){
            this.$store.dispatch("CINEMA")
           
        },
        computed:{
            list(){
               var arr=[]
               for (const key in this.$store.state.cinemas) {
                   arr.push(key)
               }
               console.log(this.$store.state.cinemas)
                return arr
            }
        },
        methods:{
            showCinema(p){
                this.cinema.cinema=!this.cinema.cinema
                this.cinema.place=p
               //请求地区电影院数组
               this.$store.commit("allPlace",{"place":p})
              
             }
        },
         watch:{
          toggle(v){
          if(v){
              var vm=this
                  setTimeout(() => {
                vm.showBtn=!vm.showBtn
                vm.isshow.is=!vm.isshow.is
           }, 200);
          }
       }
   },
   components:{
       VueAllCinema
   }
    }
</script>

<style scoped lang="less">
.Cinema{
    position: absolute;
    top:40px;
    left:0;
    width:100%;
    z-index:6;
    background-color: rgb(214, 218, 218);
    overflow: hidden;
    .list{
        overflow-y: scroll;
        height:100%;
        img{
            width:100%;
        }
    }
}
.place{
     position: absolute;
    top:0px;
    left:0;
    width:100%;
    height:100%;
    z-index:8;
    background-color: rgb(160, 167, 167);
    overflow: hidden;
}
.header{
       position: absolute;
       top:0;
       left:0;
       width:100%;
       height:40px;
       text-align: right;
       line-height: 50px;
       background-color: #474a4f;
    opacity: 0.5;
       z-index:7;
   }
</style>
