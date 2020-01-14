/**
* 作者: penghan
* 日期: 2020-01-07
* 描述: 首页右上角折线图
*/
<template>
    <div id="lineCharts" style="width: 400px;height: 200px;"></div>
</template>

<script>
    export default {
        name: "lineChart",
        components: {},
        props: [],
        data() {
            return {}
        },
        mounted() {
          this.initChart();
        },
        methods: {
          initChart(){
            let vm = this;
            var myChart = vm.echarts.init(document.getElementById("lineCharts"));
            var option = {
              visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400
              }],
              color:['#FF7342','#01A8EE'],
              title: [{
                left: 'left',
                text: '业务总量监控',
                textStyle:{
                  color:'#FFFFFF',
                  fontWeight:400
                },
              }],
              grid: [{
                bottom: '10%',
                left:'2%',
                right:'6%',
              }],
              tooltip: {
                trigger: 'axis',
                backgroundColor:'#01A8EE',
                formatter:(val)=>{
                  console.log(val);
                }
              },
              xAxis: [
                {
                  data: [1,2,3,4,5,6,7,8,9],
                  boundaryGap:false,
                  axisLine:{
                    lineStyle:{
                      color:"#CBF6FF",
                    },
                  },
                  axisTick:{
                    show:false
                  }
                }
              ],
              yAxis: [{
                type:'value',
                show:true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color:'rgba(34,117,156,.3)',
                    type:'dashed'
                  }
                },
                axisTick:{
                  show:false
                },
                axisLine:{
                  show:false,
                  lineStyle:{
                    color:"#FFFFFF",
                  },
                },
              }],
              dataZoom: [
                {
                  type: 'inside',
                  show:true,
                  start: 50,
                  end: 100
                }
              ],
              series: [{
                type: 'line',
                showSymbol: false,
                smooth: true,
                data: [120,152,253,134,325,386,79,158,119],
                areaStyle: {
                  color:new vm.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,115,66,0.69)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(1,168,238,0.69)'
                  }, {
                    offset: 1,
                    color: 'rgba(12,26,36,0.69)'
                  }
                  ])
                },
              }]
            }
            myChart.setOption(option);
          },
        }
    }
</script>

<style scoped lang='less'>

</style>
