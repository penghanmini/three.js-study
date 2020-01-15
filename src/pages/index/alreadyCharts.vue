/**
* 作者: zhaoyong
* 日期: 2020-01-10
* 描述:
*/
<template>
  <div class='depart-echarts'>
    <div id="alreadyCharts" style="width:100%;height: 140px"></div>
  </div>
</template>

<script>
  export default {
    name: "alreadyCharts",
    components: {},
    props: ['options'],
    data() {
      return {}
    },
    watch:{
      options:{
        handler(val,oldval){
          this.initEcharts()
        },
        deep:true
      }
    },
    mounted() {
      let vm = this;
      vm.initEcharts()
    },
    methods: {
      initEcharts(){
        let myChart = this.echarts.init(document.getElementById('alreadyCharts'));
        let option = {
          legend: {
            show:false,
          },
          series: [
            {
              name:'已接入医疗机构',
              type:'pie',
              radius: ['65%', '79%'],
              avoidLabelOverlap: false,
              label: {
                show:false,
                normal: {
                  show: false,
                  position: 'inside'
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              hoverOffset:6,
              clockwise:false,
              color:['#FF7342'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value: 6, name: '已接入'},
                {
                  value: 30,
                  name: '未接入',
                  itemStyle:{
                    opacity:0,
                  },
                },
              ]//this.options.data
            }
          ]
        };
        myChart.setOption(option);
        setTimeout(function () {
          window.addEventListener('resize',function () {
            myChart.resize()
          })
        },100)
      }
    }
  }
</script>

<style scoped>

</style>

