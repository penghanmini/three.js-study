/**
* 作者: zhaoyong
* 日期: 2020-01-09
* 描述:
*/
<template>
  <div>
    <div id='hospital' style="width: 200px;height:190px;"></div>
  </div>
</template>

<script>
  var category = ['一级医院','二级医院','三级医院','社区医院'];
  var lineData = [];
  var barData = [20,14,9,12];
  barData.forEach(()=>{
    lineData.push(Math.max(...barData)+4)
  })
  export default {
    name: "hospitalCharts",
    components: {},
    props: [],
    data() {
      return {}
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart(){
        let vm = this;
        var myChart = vm.echarts.init(document.getElementById("hospital"));
        var option = {
          tooltip: {
            show:false,
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
            axisLine:{
              show:false
            },
            axisTick:{
              show:false
            },
            axisLabel:{
              color:'#fff',
              align:'left',
              padding:[0,0,30,0],
              margin:-4,
              interval:0,
            }
          },
          series: [
            {
              name: 'bar',
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                barBorderRadius: 0,
                color:  new this.echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: 'rgba(0,50,91,1)'},
                    {offset: 1, color:'rgba(0,212,254,1)'}
                  ]
                )
              },
              animationDelay: function (dataIndex, params) {
                return 500;
                // return params * 50;
                // return params.index * 50;
              },
              z:-15,
              data: barData
            },
            {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            label:{
              show:false,
              position: 'right',
              padding:[0,0,0,10],
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              }
            },
            itemStyle: {
              color:'#052B47'
            },
            symbolRepeat: true,
            symbolSize: [2, 11],
            symbolMargin: 1,
            z: -10,
            data: barData
          },{
            name: '背景',
            type: 'bar',
            barGap: '-100%',
            barWidth:10,
            label:{
              show:true,
              position: 'right',
              padding:[0,0,0,10],
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              },
              formatter:(val)=>{
                return barData[val.dataIndex]
              }
            },
            itemStyle: {
              barBorderRadius: [0,7,7,0],
              color: new this.echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 1, color: '#052B47'}
                ]
              )
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

<style scoped>

</style>

