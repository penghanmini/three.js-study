/**
* 作者: penghan
* 日期: 2020-01-14
* 描述:
*/
<template>
  <div id='container' :style="{width: '320px',height:options.height+'px'}"></div>
</template>

<script>
    export default {
        name: "leftBottomBarChart",
        components: {},
        props: ['options'],
        data() {
            return {}
        },
        watch:{
          options:{
            handler(val,oldval){
              this.initChart()
            },
            deep:true
          }
        },
        mounted() {
          this.initChart()
        },
        methods: {
          initChart(){
            let vm = this;
            let xData=[],yData=[],backData=[];
            vm.options.severData.forEach((v)=>{
              xData.push(v.name)
              yData.push(v.value)
            })
            yData.forEach(()=>{
              backData.push(Math.max(...yData) +60)
            })
            var myChart = vm.echarts.init(document.getElementById("container"));
            var option = {
              tooltip: {
                show:false,
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                top:20,
                left: '0%',
                right: '12%',
                height:vm.options.height,
              },
              xAxis: [
                {
                  show:false,
                  type: 'value',
                }
              ],
              yAxis: [
                {
                  show:true,
                  type: 'category',
                  data: xData.reverse(),
                  axisLine:{
                    show:false
                  },
                  axisLabel:{
                    color:'#fff',
                    align:'left',
                    padding:[0,0,30,0],
                    margin:-10,
                    interval:0,
                  },

                }
              ],

              series: [
                {
                  type: 'bar',
                  barCategoryGap:4,
                  barWidth: 12,
                  label: {
                    show: true,
                  },
                  itemStyle: {
                    normal: {
                      color: new this.echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#001D3C'
                      }, {
                        offset: 1,
                        color: '#00C8FF'
                      }]),
                      barBorderRadius: 5,
                      z: -10,
                      label: {
                        show: false,
                      }
                    }
                  },
                  animationDelay:(index)=>{
                    return (vm.options.severData.length-index) * 300
                  },
                  animationEasing: 'bounceOut',
                  animationDurationUpdate:1000,
                  data: yData.reverse()
                },
                {
                  type: 'bar',
                  barGap: '-100%',
                  barWidth:12,
                  z: -11,
                  barBorderRadius: 5,
                  itemStyle: {
                    barBorderRadius: [0,7,7,0],
                    color: new this.echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 1, color: '#052B47'}
                      ]
                    )
                  },
                  label: {
                    show: true,
                    align:'right',
                    position: 'right',
                    offset:[30,0],
                    textStyle: {
                      color: '#ffffff',
                      fontSize: 14
                    },
                    formatter:(val)=>{
                      return yData[val.dataIndex]
                    }
                  },
                  data: backData
                }
              ]
            };
            myChart.setOption(option);
          },
        }
    }
</script>

<style scoped lang='less'>

</style>
