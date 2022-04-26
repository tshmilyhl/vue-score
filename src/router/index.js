import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../page/home'
import Item from '../page/item'
import Score from '../page/score'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home 
    },
    {
        path:'/item',
        component:Item 
    },
    {
        path:'/score',
        component:Score
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router