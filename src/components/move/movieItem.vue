<template>
    <div class="movieItem" >
        <div class="header">
            <mu-switch v-if="showBtn"  class="demo-switch"  v-model="toggle"/><br/>
        </div>
        <div class="bg" :style="[style]">

        </div>
        <!-- 评论区 -->
         <VueMoveTalk :moveitem="moveitem" ></VueMoveTalk> 

         <div class="fleBtn">
               <mu-float-button :icon="buyBtn?'add':null" mini class="demo-float-button" @click="animt"/>
              <div class="animt">
                        <span class="ltleTit" @click="routergo">影院</span>
                        <span class="ltleTit">影评</span>
                        <span class="ltleTit">介绍</span>
                     </div>
         </div>
         
         <router-view :isshow="isshow" v-if="isshow.is"></router-view>
        
    </div>
</template>

<script>
import VueMoveTalk from './movieTalk.vue'
    export default {
        props:["moveitem"],
        data(){
            return {
                showBtn:true,
                toggle:false,
                style:{
                    "color":"red",
                    "position": "absolute",
                        "top":"0",
                        "width":"100%",
                        "height":"150%",
                        "padding":"30px",
                        "background-size":"150% 150%",
                        //羽化图片
                        "-webkit-filter": "blur(30px)",/* Chrome, Opera */
                        "-moz-filter": "blur(30px)",
                        "-ms-filter": "blur(30px)",    
                            " filter": "blur(30px)" ,
                        "background-image":`url(${this.moveitem.img})`
                
                },
                buyBtn:true,
                isshow:{is:false}
       } 
   },
   created(){
       this.$store.dispatch("MOVIETALK",{"id":this.moveitem.id})
      
   },
   watch:{
          toggle(v){
          if(v){
              var vm=this
                  setTimeout(() => {
                vm.showBtn=!vm.showBtn
               vm.$router.push("/move")
           }, 200);
          }
       }
   },
   methods:{
       animt(){
           $(".animt span").stop()
           this.buyBtn=!this.buyBtn
           if(!this.buyBtn){
               $(".animt span").eq(0).animate({
                      top:"-50px",
                       left:"-30px"
                      },"200",function(){
               $(".animt span").eq(1).animate({
                               top:"-10px",
                                   left:"-70px"
                               },"300",function(){
   
                           })
               $(".animt span").eq(2).animate({
                      top:"40px",
                       left:"-30px"
                      },"500",function(){
                 })
                 })
           }else{
               var array=$(".animt span")
               for (let index = 0; index < array.length; index++) {
                   array.eq(index).animate({
                      top:"0px",
                       left:"0px"
                      },"100",function(){
                 })
                   
               }
           }
               
          
       },
       Cinema(){

       },
       routergo(){
          this.isshow.is=!this.isshow.is
           this.$router.push("/move/moveItem/cinema")
       }
   }
   ,components:{
       VueMoveTalk
   }
}
</script>

<style scoped lang="less">
.movieItem{
    position: fixed;
    top:0px;
    left:0;
    width:100%;
    height:100%;
    background-color: rgb(251, 248, 248);
    z-index: 3;
   overflow: hidden;
   color:rgb(8, 8, 8);
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
       z-index: 6;
   }
  
    .fleBtn{
        position:fixed;
        right:15%;
        bottom:18%;
        text-align: center;
        z-index: 6;
        color:rgb(60, 109, 15);
        .demo-float-button{
            position: absolute;
            top:0;
            left:0;
            z-index: 5;
        }
        .animt{      
             position: absolute;
            top:3px;
            left:3px;
            z-index: 4;
            .ltleTit{
                position: absolute;
                top:0;
                left:0;
                width:35px;
                height:35px;
                color:rgb(233, 225, 201);
                background-color: rgb(99, 89, 89);
                border-radius: 50%;
                text-align: center;
                line-height: 35px;
                z-index: 4;
        }
    }
}
    }

</style>