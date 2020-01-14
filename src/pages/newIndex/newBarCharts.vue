/**
* 作者: penghan
* 日期: 2020-01-09
* 描述:
*/
<template>
    <div id="newBarChart" style="width: 40%;height:90%;"></div>
</template>

<script>
    export default {
        name: "newBarCharts",
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
            var myChart = vm.echarts.init(document.getElementById('newBarChart'))
            var category = [];
            var dottedBase = +new Date();
            var lineData = [];
            var barData = [];

            for (var i = 0; i < 4; i++) {
              var date = new Date(dottedBase += 3600 * 24 * 1000);
              category.push([
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
              ].join('-'));
              var b = Math.random() * 200;
              barData.push(b)
              lineData.push(200);
            }
            var option = {
              backgroundColor: '#0f375f00',
              tooltip: {
                show: false,
                trigger: 'axis',
                axisPointer: {
                  type: 'line'
                }
              },
              grid: {
                left: '4%',
                right: '12%',
                bottom: '4%',
                top:'4%',
              },
              xAxis: {
                show:false,
              },
              yAxis: {
                show:true,
                splitLine: {show: false},
                data: category,
                data: ['社区医院','三级医院','二级医院','一级医院'],
                axisLabel:{
                  color:'#fff',
                  align:'left',
                  padding:[0,0,30,0],
                  margin:-4,
                  interval:0,
                },
                axisLine:{
                  show:false,
                },
              },
              series: [{
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                  barBorderRadius: 0,
                  color:  new vm.echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                      {offset: 0, color: '#006FA7'},
                      {offset: 1, color: '#00EBFA'}
                    ]
                  )
                },
                z:-15,
                data: barData
              },{
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                  color:'#0f375f',
                },
                symbolRepeat: true,
                symbolSize: [2, 12],
                symbolMargin: 2,
                z: -10,
                data: barData
              },{
                name: '背景',
                type: 'bar',
                barGap: '-100%',
                barWidth:10,
                itemStyle: {
                  barBorderRadius: [0,7,7,0],
                  color: '#052B47',
                },
                z: -16,
                data: lineData
              },]
            };
            myChart.setOption(option);
          },
        }
    }
</script>

<style scoped lang='less'>

</style>
