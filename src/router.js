import VueRouter from 'vue-router';
//电影页面类
import move from './components/move';
import moveItem from './components/move/movieItem.vue';
import cinema from './components/move/cinema.vue';
//音乐页面类
import music from './components/music';
//新闻页面类
import news from './components/news';



export default new VueRouter({
    routes: [
        {
            path: '/music',
            name:"音乐",
            component: music
           
        },
        {
            path: '/news',
            name:"新闻",
            component: news,
           
        }
        ,
        {
            path: '/move',
            name:"电影",
            component:move,
            children:[
                {
                    path: '/move/moveItem',
                    name: "电影介绍",
                    component: moveItem,
                    children: [
                        {
                            path: '/move/moveItem/cinema',
                            name: "影院查找",
                            component: cinema
                        },
                    ]
                }
                
            ]
           
        }
        ,
        {
            path: '*',
            redirect:"/move"
           
        }
    ]
});