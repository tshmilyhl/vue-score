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