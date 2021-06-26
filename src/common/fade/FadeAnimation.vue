<template>
  <transition>
    <slot></slot>
  </transition>
</template>

// 看不懂请查看 https://cn.vuejs.org/v2/guide/transitions.html
<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
    opacity 0
.v-enter-active,.v-leave-active
    transition opacity .5s
</style>
