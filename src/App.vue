<template>
   <div>
       <div class="header">
      <div class="logo">
        </div>
         <div class="nav">
            <mu-tabs :value="activeTab" @change="routerChange" class="tab">
          <mu-tab value="/move" title="Nav One"/>
          <mu-tab value="/music" title="Nav TwO"/>
          <mu-tab value="/news" title="Nav Three"/>
        </mu-tabs>
      </div>
    </div>
            <router-view></router-view>
        <div class="tabBar">
    <div class="header">
      <div class="logo">
        </div>
         <div class="nav">
            <mu-tabs :value="activeTab" @change="routerChange" class="tab">
          <mu-tab value="/move" title="Movie"/>
          <mu-tab value="/music" title="Music"/>
          <mu-tab value="/news" title="Nav Three"/>
        </mu-tabs>
      </div>
    </div>
        </div>
        
   </div>
</template>

<script>
export default {
  data() {
    return {
        activeTab:""
    };
  },
  created(){
    this.activeTab=this.$route.path
  },
  methods:{
      routerChange (val) {
           this.activeTab=val
          this.$router.push(val)
    }
  }
};
</script>

<style scoped lang="less">

.tabBar{
    position: absolute;
    bottom:0px;
    left:0;
    width:100%;
    height:50px;
    background-color: #484a4f;
    z-index: 10;
    ul{
        display: flex;
        text-align: center;
        li{
            flex: 1;
            color:#fff;
            line-height: 50px;
        }
    }
}
</style>