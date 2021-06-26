<template>
  <div>
    <!-- v-bind:等价于: v-on等价于@ -->
    <city-header ref="header"></city-header>
    <city-search ref="search" v-bind:cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      :itemHeight="itemHeight"
      :HeaderSearch_Height="HeaderSearch_Height"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './Components/Header'
import CitySearch from './Components/Search'
import CityList from './Components/List'
import CityAlphabet from './Components/Alphabet'

export default {
  name: 'City',
  components: {
    // 'city-header': CityHeader写法可以简写 CityHeader
    'city-header': CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      itemHeight: 20,
      HeaderSearch_Height: 0
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handlerGetCityInfoSucc)
    },
    handlerGetCityInfoSucc (res) {
      // 可以查看res对象信息，便于理解调用
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    getHeaderSearch_Height () {
      // 通过console.log 一步步解构来明白
      this.HeaderSearch_Height =
        this.$refs.header.$el.scrollHeight + this.$refs.search.$el.scrollHeight
      return this.HeaderSearch_Height
    }
  },
  mounted () {
    this.getCityInfo()
    this.getHeaderSearch_Height()
  }
}
</script>

<style lang="stylus" scoped></style>
