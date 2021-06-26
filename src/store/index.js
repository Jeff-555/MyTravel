import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

//  Vuex 应用的核心就是 store（仓库） 使用方法：https://vuex.vuejs.org/zh/guide/
Vue.use(Vuex)

// 1、外部vue组件发送行为（方法）触发对vuex
// 2、vuex把信息提交到对应mutation中
export default new Vuex.Store({
  // 先触发mutations在影响state
  state,
  mutations
})
