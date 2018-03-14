<template>
    <div>
        <div class="header">
            <mu-switch v-if="showBtn"  class="demo-switch"  v-model="toggle"/><br/>
        </div>
        <div class="list" v-height="90">
            <mu-grid-list class="gridlist-demo">
                <mu-grid-tile v-for="(tile,index) in list" :key="index" >
                    <img @click="chooseSeat(tile.id)" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3454791836,4138084491&fm=27&gp=0.jpg" alt="">
                <h3 slot="title" >{{tile.nm}}</h3>
                <span slot="subTitle">{{tile.area}}</span>
                <mu-icon-button icon="star_border" slot="action"/>
                </mu-grid-tile>
        </mu-grid-list>
        </div>
        <transition name="fade" v-if="cinema1.cinema1&&$store.state.chooseSeat!=''">
        <VueMdetails :cinema1="cinema1"></VueMdetails>
        </transition>
        
    </div>
</template>

<script>
import VueMdetails from './moviedetails.vue'
    export default {
        props:["cinema"],
        data(){
            return {
                showBtn:true,
                toggle:false,
                cinema1:{cinema1:false}
            }
        },
        computed:{
            list(){
                return this.$store.getters.placeNm
            }
        },
         watch:{
          toggle(v){
          if(v){
              var vm=this
                  setTimeout(() => {
                vm.showBtn=!vm.showBtn
                vm.cinema.cinema=!vm.cinema.cinema
           }, 200);
          }
       }
    },
    methods:{
        chooseSeat(id){
            //发送选座位的请求
            this.$store.dispatch("CHOOSESET",{"cinemaid":id,"movieid":this.$store.state.movieId})
           
           this.cinema1.cinema1=!this.cinema1.cinema1
        }
    },
    components:{
        VueMdetails
    }
  }
</script>

<style scoped lang="less">
.header{
       position: absolute;
       top:0;
       left:0;
       width:100%;
       height:40px;
       text-align: right;
       line-height: 50px;
       background-color: #787d81;
      
   }
.list{
        position: absolute;
        top:40px;
        left:0;
        overflow-y: scroll;
        height:100%;
        width:100%;
        text-align: center;
        img{
            width:100%;
        }
    h3 {
    color: rgba(116, 20, 20, 0.87);
   
        
    }
}
</style>