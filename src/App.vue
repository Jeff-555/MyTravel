<template>
  <div id="app">
    <!-- keep-alive 作用防止重新渲染 exclude表示除了xx，其他不需要重新渲染。include反之 -->
    <keep-alive exclude="Detail,City">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
