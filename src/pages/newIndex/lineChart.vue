/**
* 作者: penghan
* 日期: 2020-01-07
* 描述: 首页右上角折线图
*/
<template>
    <div id="lineCharts" style="width: 80%;height: 60%;"></div>
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
              color:['#67C23A','#E6A23C'],
              tooltip: {
                trigger: 'axis'
              },
              xAxis: [{
                data: [1,2,3,4,5,6,7,8,9],
                boundaryGap:false,
                axisLine:{
                  lineStyle:{
                    color:"#48748A",
                  },
                },
              }],
              yAxis: [{
                show:false,
              }],
              grid: [{
                left: '4%',
                right: '10%',
                top:'10%',
                bottom: '10%'
              }],
              series: [{
                type: 'line',
                showSymbol: false,
                smooth: true,
                data: [120,152,253,134,325,386,179,158,119],
                lineStyle:{
                  color: new vm.echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#FF7342'},
                      {offset: 1, color: '#01A8EE'},
                    ]
                  )
                },
                areaStyle:{
                  color: new vm.echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#01A8EE'},
                      {offset: 1, color: '#0C1A24'}
                    ]
                  )
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
