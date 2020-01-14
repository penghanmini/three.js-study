<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 18px;
}

  .title{
    font-size: 28px;
    margin: 10px 0;
  }
  code{
    background-color: rgb(244, 244, 245) !important;
    color: #606266 !important;
  }
</style>
