<template>
    <div class="movieBox" v-height="100">
        <ul class="movie">
            <li class="movieItem" v-for="item in movies" :key="item.id" @click="showItem(item)">
               <div class="cutbox">
                   <img :src="item.img" alt="">
               </div>
               <p>
                  <span>{{item.sc}}分</span>
                   {{item.nm}}
                   <mu-icon value="cloud_download" color="orange"/>
               </p>
               
            </li>
        </ul>
        <transition name="fade" v-if="moveitem!==''">
        <router-view :moveitem="moveitem"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                moveitem:""
            }
        },
        created(){
            //拉取电影数据
            this.$store.dispatch("MOVEINIT")
        },
        computed:{
            movies(){
                 return this.$store.state.movies
            }
        },
        methods:{
            showItem(item) {
                this.moveitem=item
               this.$router.push('/move/moveItem')
                
            }
        
   },
    }
</script>

<style scoped lang="less">
.movieBox{
    position: absolute;
    top:50px; 
    padding-top:10px;
    overflow-y: scroll;
}
.movie{
    width: 100%;
    
    .movieItem{
       float: left;
        width:50%;
        padding:10px;
        text-align: center;
        font-weight: bold;
        font-size: 13px;
       .cutbox{
           height:210px;
           overflow: hidden;
           margin-bottom: 5px;
            img{
                width:100%;
        }
       }
       p{
           position: relative;
           padding:5px 30px;
           height:50px;
       }
       span{
          position: absolute;
          left:5px;
          top:6px;
           font-size: 12px;
           color:rgb(206, 158, 27);
       }
       .mu-icon{
           position: absolute;
           top:3px;
           right:5px;
       }
    }
}

</style>