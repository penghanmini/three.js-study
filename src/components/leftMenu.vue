/**
* 作者: penghan
* 日期: 2019-12-23
* 描述:
*/
<template>
    <div class="leftMenu">
      <div class="left-top">
        <img src="../../static/img/panda.png" alt="">
        <div>学习THREE.JS--penghan</div>
      </div>
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo">
        <div v-for="(item,index) in options" :key="index">
          <el-submenu v-if="item.children.length>0" :index="item.index" :route="item.frontUrl">
            <template slot="title">{{item.label}}</template>
            <el-menu-item v-for="(items,indexs) in item.children" :index="items.index" :route="items.frontUrl" :key="indexs">
              <template slot="title">{{items.label}}</template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.index" :route="item.frontUrl">
            <template slot="title">{{item.label}}</template>
          </el-menu-item>
        </div>

      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "leftMenu",
        components: {},
        props: {
          options:{
            type: Array,
            default: false,
          },
        },
        data() {
            return {}
        },
        mounted() {
          let vm = this;
        },
        methods: {}
    }
</script>

<style scoped lang='less'>
  .leftMenu{
    width: 300px;
    background-color: #545c64;
    color: #FFF;
    .left-top{
      padding: 20px 10px;
      display: flex;
      flex-flow: nowrap;
      justify-content: space-around;
      align-items: center;
    }
    /deep/.el-menu{
      border-right: none;
    }
  }
</style>
