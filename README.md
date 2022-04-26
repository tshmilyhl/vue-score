# 说明

>  非常简单的一个vue2 + vuex的项目，整个流程一目了然，麻雀虽小，五脏俱全，适合作为入门练习。

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

## 项目运行（nodejs 6.0+）
``` bash
# 克隆到本地
git clone https://github.com/tshmilyhl/vue-score.git

# 进入文件夹
cd vue-score

# 安装依赖
npm install 或 yarn(推荐)

# 开启本地服务器localhost:8088
npm run dev

# 发布环境
npm run build
```

## 路由配置
```js
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
```



## 配置actions
```js

export default {
    addNum({state,commit},id){
        console.log(11);
        // 点击下一题，记录答案id,判断是否是最后一题，如果不是，则记住答案，且索引加一，如果是最后一题，则提交
        commit('REMEMBER_ANWSER',id)
        if(state.itemNum < state.itemDetail.length - 1 ){
            commit('ADD_ITEMNUM',1)
        }
    },

    // 初始化信息
    initializeData({commit}){
        commit('INITIALIZE_DATA')
    }
}

```

## 配置mutation-types
```js
export const REMEMBER_ANWSER = 'REMEMBER_ANWSER'
export const ADD_ITEMNUM = 'ADD_ITEMNUM'
export const INITIALIZE_DATA = 'INITIALIZE_DATA'

```

## 配置mutations
```js
import {REMEMBER_ANWSER,ADD_ITEMNUM,INITIALIZE_DATA} from './mutation-types'
export default {
    // 记录答案
    [REMEMBER_ANWSER](state,id){
        console.log('av');
        state.answerid.push(id)
    },

    // 点击进入下一题
    [ADD_ITEMNUM](state,num){
        state.itemNum += num
    },
    // 初始化信息
    [INITIALIZE_DATA](){
        document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
    }
}

```

## 创建store
```js
import Vue from "vue";
import Vuex from 'vuex';

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  level: '第一周', //活动周数
  itemNum: 1, // 第几题
  allTime: 0,  //总共用时
  timer: '', //定时器
  itemDetail: [
   {
    "topic_id": 20,
    "active_topic_id": 4,
    "type": "ONE",
    "topic_name": "题目一",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [
        {
      "topic_answer_id": 1,
      "topic_id": 20,
      "answer_name": "答案aaaa",
      "is_standard_answer": 0
       }, 
       {
      "topic_answer_id": 2,
      "topic_id": 20,
      "answer_name": "正确答案",
      "is_standard_answer": 0
       }, 
       {
      "topic_answer_id": 3,
      "topic_id": 20,
      "answer_name": "答案cccc",
      "is_standard_answer": 0
      }, 
      {
      "topic_answer_id": 4,
      "topic_id": 20,
      "answer_name": "答案dddd",
      "is_standard_answer": 1
      }
  ]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目二",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 5,
      "topic_id": 21,
      "answer_name": "答案A",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 6,
      "topic_id": 21,
      "answer_name": "答案B",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 7,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 8,
      "topic_id": 21,
      "answer_name": "答案D",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目三",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 9,
      "topic_id": 21,
      "answer_name": "测试A",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 10,
      "topic_id": 21,
      "answer_name": "BBBBBB",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 11,
      "topic_id": 21,
      "answer_name": "CCCCCC",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 12,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目四",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 13,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 14,
      "topic_id": 21,
      "answer_name": "A是错的",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 15,
      "topic_id": 21,
      "answer_name": "D是对的",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 16,
      "topic_id": 21,
      "answer_name": "C说的不对",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目五",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 17,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 18,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 19,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 20,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 0
    }]
  }],
  answerid: [], //答案id
}

const store = new Vuex.Store({
      // namespaced:true,
      state,
      mutations,
      actions
})

export default store
```


## 创建main.js
```js
import Vue from 'vue'
import router from './router'
import store from './store'
import './style/common'
import './config/rem'

new Vue({
    router,
    store,
}).$mount('#app')
```
