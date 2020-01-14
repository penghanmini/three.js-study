/**
* 作者: penghan
* 日期: 2020-01-14
* 描述:
*/
<template>
  <div id="alreadyCharts" style="width:100%;height: 140px"></div>
</template>

<script>
    export default {
        name: "hospitalPie",
        components: {},
        props: ['options'],
        data() {
            return {}
        },
        mounted() {
          this.initChart();
        },
        methods: {
          initChart(){
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
                  color:['#FF4A53','#51D7FF'],
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
                  ]
                }
              ]
            };
            myChart.setOption(option);
            setTimeout(function () {
              window.addEventListener('resize',function () {
                myChart.resize()
              })
            },100)
          },
        }
    }
</script>

<style scoped lang='less'>

</style>
