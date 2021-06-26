<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true, // 转到最后一页时下一页跳转回初始页
        autoplay: 2000, // 自动播放延迟时间 默认为0
        reverseDirection: true,
        autoplayDisableOnInteraction: false, // 鼠标触碰后是否结束自动轮播，默认为true
        autoplayStopOnLast: false, // 当切换到最后一个slide时停止自动切换。默认为false
        speed: 1000 // 触摸滑动时释放至贴合的时间

        // swiper版本 4-6 可用 对象赋值 例 autoplay: { .... }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
