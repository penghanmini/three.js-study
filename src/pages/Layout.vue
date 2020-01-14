/**
* 作者: penghan
* 日期: 2019-12-23
* 描述: Layout
*/
<template>
    <div class="layout">
      <!--<leftMenu :options="leftData"></leftMenu>-->
      <div class='padding30'>
        <router-view/>
      </div>

    </div>
</template>

<script>
  import leftMenu from '@/components/leftMenu'
    export default {
        name: "Layout",
        components: {
          leftMenu,
        },
        props: [],
        data() {
            return {
              leftData:[
                {
                  index:'0',
                  label:'首页',
                  frontUrl:'/',
                  iconStyl:'',
                  children:[],
                },
                {
                  index:'1',
                  label:'入门',
                  frontUrl:'',
                  iconStyl:'',
                  children:[
                    {
                      index:'11',
                      label:'场景创建',
                      frontUrl:'/createScene',
                      iconStyl:'',
                    },
                    {
                      index:'12',
                      label:'绘制一条直线',
                      frontUrl:'/lineStudy',
                      iconStyl:'',
                    },
                  ],
                },
                {
                  index:'2',
                  label:'示例',
                  frontUrl:'/introduction',
                  iconStyl:'',
                  children:[],
                },
              ],
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>
  .layout{
    display: flex;
    flex-flow: nowrap;
    justify-content: left;
    .padding30{
      /*padding: 30px;*/
    }
  }
</style>
