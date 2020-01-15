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
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width: 4px;
  height: 1px;
  opacity: 0;
}
::-webkit-scrollbar:hover{
  opacity: 1;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #2678A9;
}
</style>
