<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      const currentId = this.$route.params.id
      res = res.data
      if (res.ret && res.data) {
        const currentData = res.data.detailList[currentId]
        // console.log(data)

        this.sightName = currentData.sightName
        this.bannerImg = currentData.bannerImg
        this.gallaryImgs = currentData.gallaryImgs
        this.list = currentData.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
