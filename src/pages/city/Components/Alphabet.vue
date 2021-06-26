<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
    HeaderSearch_Height: Number,
    itemHeight: Number
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // 计算属性return会赋值或创建对应当前data数据
      // console.log(letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      // 下面两属性用于节流
      startY: 0,
      timer: null
    }
  },
  updated () {
    // ajax渲染后，触发更新
    // 初始化滚条顶部高度到search组件的距离
    this.startY = this.$refs['A'][0].offsetTop
    this.test = this.$refs['A']
    // console.log(this.test)
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - this.HeaderSearch_Height
          // console.log(touchY)
          // if (touchY < 55 || touchY > 515) {
          //   // 超过触发价值元素 则中断事件 性能损耗小可以省略
          //   this.handleTouchEnd()
          // }
          const index = Math.floor((touchY - this.startY) / this.itemHeight)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>
