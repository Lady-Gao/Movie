<template>
    <div>
        
         <div class="info">
           <div class="fl">
                <img :src="moveitem.img" alt="">
           </div>
            <div class="fl">
                <h3>{{moveitem.nm}}</h3>
               <p>{{moveitem.ver}}</p>
               <p>{{moveitem.snum}}万人评分</p>
               <p>{{moveitem.cat}}</p>
               <p>{{moveitem.rt}}</p>
               <p>导演{{moveitem.dir}}</p>
               <!-- <p>主演{{moveitem.star}}</p> -->
            </div>
        </div>
           <!-- <mu-raised-button label="点击购票" class="demo-raised-button"/> -->
           <div class="content">
               <!-- <h3>短评</h3> -->
               <ul>
                   <li v-for="item in $store.state.moviestalk" :key="item.id">
                       <p class="fl">
                           <span>{{item.nick}}</span>
                           <img :src="item.avatarurl" alt="">
                       </p>
                       <p class="fl">{{item.content}}</p>
                   </li>
               </ul>
              
            </div>   
    </div>
</template>

<script>
    export default {
        props:["moveitem"],
        data(){
            return {
              
                
            }
        }
        
    }
</script>

<style scoped lang="less">
.info{
       position:absolute;
       top:70px;
       left:20px;
       display: flex;
       div{
           flex: 1;
           p{
               font-size:15px;
               margin:5px 0 0 0;
               color:rgb(12, 12, 12);
               font-weight: bold;
               
           }
       p:nth-child(odd){
           color:rgb(46, 43, 43);
            font-size:12px;
       }
       }
   }
        img{
            float: left;
            width:150px;
            margin-right:30px;
        }
    .content{
        overflow-y: scroll;
        position: absolute;
        top:50%;
        left:0;
        width:100%;height:45%;
        background-color: rgb(218, 214, 214);
       z-index: 4;
       ul{
           padding:10px 20px;
           li{
               p{
                   position: relative;
                 height:50px;
                   width:80%;
                   line-height: 50px;
                    // margin-bottom:10px;
                    text-overflow : ellipsis; 
                    white-space : nowrap; 
                    overflow : hidden; 
                    
                }
                p:nth-child(1){
                    
                    width:20%;
                   
                    img{
                         width:30px;
                         height:30px;
                         border-radius: 50%;
                         border:1px solid #fff;
                         background-color: rgb(110, 108, 108);
                    }
                    span{
                        position: absolute;
                        top:15px;
                        left:0;
                        width:50px;
                        color:#c49b34eb;
                        text-overflow : ellipsis; 
                        white-space : nowrap; 
                        overflow : hidden; 
                    }
                }
                 
           }
           li:nth-child(2n){
                     color:rgb(83, 85, 84)
                 }
       }
    }
   
</style>