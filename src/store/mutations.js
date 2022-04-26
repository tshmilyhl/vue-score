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