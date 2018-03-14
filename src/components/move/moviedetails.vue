<template>
    <div>
         <div class="header">
            <mu-switch v-if="showBtn"  class="demo-switch"  v-model="toggle"/><br/>
        </div>
        <div class="list">
           <ul>
               <li>
                   {{list}}
               </li>
           </ul>
        </div>
      
    </div>
</template>

<script>
    export default {
        props:["cinema1"],
      data(){
          return {
               showBtn:true,
                toggle:false
      }
            
        },
        created(){
            console.log(this.list)
        },
        computed:{
            list(){
                return this.$store.state.chooseSet
            }
        },
         watch:{
          toggle(v){
          if(v){
              var vm=this
                  setTimeout(() => {
                vm.showBtn=!vm.showBtn
                vm.cinema1.cinema1=!vm.cinema1.cinema1
           }, 200);
          }
       }
    },
    methods:{
       
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
       background-color: #8b9297;
      
   }
.list{
        position: absolute;
        top:40px;
        left:0;
        overflow-y: scroll;
        height:100%;
        width:100%;
        text-align: center;
        background-color: rgb(231, 227, 227);
        img{
            width:100%;
        }
    
}
</style>