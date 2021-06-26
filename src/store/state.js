// 4、state接收到mutate请求，执行对应操作然后重新渲染对应vue组件

let defaultCity = '东莞'
// 清除localStorage数据 localStorage.clear()
try {
  if (localStorage.city) {
    // 如果localStorage.city默认值存在，则取代默认值
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
