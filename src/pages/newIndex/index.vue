/**
* 作者: penghan
* 日期: 2020-01-07
* 描述: 首页
*/
<template>
    <div class="index">
      <div class="left">
        <div class="left_top">
          <div class="left_top_title">已接入医疗机构</div>
          <div class="left_top_main">
            <div class="left_top_pie">
              <div class="left_top_num">
                <div class="num">{{hospitalNum}}</div>
                <div class="node">现进度</div>
              </div>
              <div class="left_top_img">
                <hospitalPie></hospitalPie>
              </div>
            </div>
            <newBarChart class="left_top_bar"></newBarChart>
          </div>
        </div>
        <div class="left_bottom">
          <div class="left_bottom_title">实时数据排行<span>（门急诊人次）</span></div>
          <div class="left_bottom_main">
            <div class='left-number'>
              <div class='item-height' v-for='item,index in leftBottomBarChartData.severData' :key='index'>
                <div :class='["number-item", index <= 2 ? "border-red":"border-blue"]'>{{index<9?`0${index +1}`:index+1}}</div>
              </div>
            </div>
            <leftBottomBarChart class="left_bottom_bar" :options="leftBottomBarChartData" ref="barChart"></leftBottomBarChart>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="center_top"></div>
        <div class="center_bottom"></div>
      </div>
      <div class="right">
        <div class="right_top">
          <div class="right_top_title">业务总量监控</div>
          <linChart class="right_top_line"></linChart>
        </div>
        <div class="right_bottom">
          <div class="right_bottom_title">业务流</div>
          <div class='table-box'>
            <div class='table-header'>
              <span class='header-item1'>时间</span>
              <span class='header-item2'>医院</span>
              <span class='header-item3'>姓名</span>
              <span class='header-item4'>业务</span>
            </div>
            <div class='table-content'>
              <div class='alls'>
                <p @click='rowClickFn(item)' @mouseout='movebox' @mouseover='hovermybox($event)' v-for='item,index in tableData' :key='index' class="row">
                  <span class='items text-ind'><span @mouseover='hovermybox1($event)' @mouseout='livebox($event)'>{{item.time}}</span></span>
                  <span class='items width1'><span @mouseover='hovermybox1($event)' @mouseout='livebox($event)'>{{item.institutionName}}</span></span>
                  <span class='items width2'>{{item.patientName}}</span>
                  <span class='items width3'><span @mouseover='hovermybox1($event)' @mouseout='livebox($event)'>{{item.typeName}}</span></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import linChart from './lineChart'
  import newBarChart from './newBarCharts'
  import leftBottomBarChart from './leftBottomBarChart'
  import hospitalPie from './hospitalPie'
    export default {
        name: "index",
        components: {
          linChart,
          newBarChart,
          leftBottomBarChart,
          hospitalPie,
        },
        props: [],
        data() {
            return {
              hospitalNum:20,
              leftBottomBarChartData: {
                severData:[
                  {
                    name:'11天使儿童医院',
                    value:245
                  },
                  {
                    name:'武侯人民医院',
                    value:145
                  },
                  {
                    name:'11天使儿童医院',
                    value:200
                  },
                  {
                    name:'武侯人民医院',
                    value:105
                  },
                  {
                    name:'11天使儿童医院',
                    value:215
                  },
                  {
                    name:'武侯人民医院',
                    value:45
                  },
                  {
                    name:'成都中医院',
                    value:215
                  },
                  {
                    name:'华西医院',
                    value:45
                  },
                ],
                height: 0,
              },
              tableData:[
                {
                  time:'2018-11-12 10:06:22',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12 10:06:22',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
                {
                  time:'2018-11-12',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
              ],
              dataArray:[],
            }
        },
        mounted() {
          this.leftBottomBarChartData.height = this.leftBottomBarChartData.severData.length*50;
          this.$nextTick(()=>{
            this.$refs.barChart.initChart();
          })
          this.movebox();
        },
        methods: {
          //业务流
          movebox(){
            let vm = this;
            vm.timer2 =setInterval(()=>{
              vm.dataArray = [
                {
                  time:'2018-11-12 10:06:22',
                  institutionName:'XXX医院',
                  patientName:'王王',
                  typeName:'挂号挂号挂号挂号挂号',
                },
              ]
              if(vm.dataArray.length){
                vm.tableData.unshift(vm.dataArray.pop())
                if(vm.tableData.length > 11){
                  vm.tableData.pop();
                }
                vm.addDatafn([vm.dataArray[vm.dataArray.length-1]])
              }
            },700)
          },
          hovermybox(e){
            let vm = this;
            $('.table-content').stop()
            clearInterval(vm.timer2)
          },
          hovermybox1(e){
            let vm = this;
            if(e.target.innerText.length>7){
              e.target.classList.add('moves')
            }
          },
          livebox(e){
            let vm = this;
            e.target.classList.remove('moves')
          },
          rowClickFn(val){
            let vm = this;
            vm.$router.push({
              path:'/patientMsg',
              query:{
                active:'second',
                institutionCode:val.institutionCode,
                patientId:val.patientId,
                pkId:val.pkId,
                typeId:val.type,
                typeName:val.typeName,
                name:val.institutionName
              }
            })
          },
          //业务流滚动
          addDatafn(datas=[]){
            let vm = this;
            let nodes = $('.table-content')
            let heights = $('.row').height();
            if(heights){
              nodes.css("marginTop",-heights * datas.length + 'px')
            }else {
              nodes.css("marginTop",-90 * datas.length + 'px')
            }
            nodes.stop(true,true).animate({"marginTop": "0" },500)
            vm.tableFlag = true;
          },
        },
        destroyed(){
          clearInterval(this.timer2);
          console.log('清除timer2');
        }
    }
</script>

<style scoped lang='less'>
  .index{
    height: 1080px;
    width: 1920px;
    background: url("../../../static/img/newBack.png");
    color: aqua;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    .left{
      .left_top{
        position: absolute;
        top: 90px;
        left: 1px;
        height: 312px;
        width: 567px;
        background: url("../../../static/img/left-top.png") 100% 100%;
        .left_top_title{
          color: #FFFFFF;
          font-size: 18px;
          padding: 50px 0 0 50px;
        }
        .left_top_main{
          height: 200px;
          display: flex;
          flex-flow: nowrap;
          justify-content: center;
          align-items: center;
        }
        .left_top_pie{
          width: 30%;
          position: relative;
          .left_top_num{
            text-align: center;
            position: absolute;
            top: 50px;
            left: 50px;
            z-index: 1000;
            .num{
              color: #FF7342;
              font-size: 20px;
            }
            .node{
              color: #FFFFFF;
              font-size: 10px;
            }
          }
          .left_top_img{
            width: 136px;
            height: 136px;
            background: url("../../../static/img/already.png") no-repeat;
            animation: alreadysrotateZ 3s linear infinite;
          }
          @keyframes alreadysrotateZ {
            0% {
              transform: rotateZ(0);
            }
            100% {
              transform: rotateZ(360deg);
            }
          }
        }
        .left_top_bar{
          margin-top: 10px;
        }
      }
      .left_bottom{
        height: 680px;
        width: 592px;
        position: absolute;
        bottom: 10px;
        left: 1px;
        background: url("../../../static/img/left-bottom.png") 100% 100%;
        .left_bottom_title{
          color: #FFFFFF;
          font-size: 18px;
          padding: 50px 0 0 50px;
          span{
            font-size: 14px;
          }
        }
        .left_bottom_main{
          height: 600px;
          display: flex;
          padding: 10px 0 0 65px;
          overflow: auto;
          .left_bottom_bar{
          }
          .left-number{
            flex-basis: 40px;
            padding-right: 10px;
            .item-height{
              height: 50px;
              padding-top: 22px;
              box-sizing: border-box;
            }
            .number-item{
              width: 28px;
              height: 28px;
              text-align: center;
              line-height: 28px;
            }
            .border-red{
              border:1px solid rgba(255,115,66,1);
              color:rgba(255,115,66,1);

            }
            .border-blue{
              border:1px solid rgba(3,148,174,1);
              color:rgba(3,148,174,1);

            }
          }
        }
      }
    }
    .center{
      height: 980px;
      width: 50%;
      .center_top{
        height: 180px;
      }
      .center_bottom{
        height: 770px;
      }
    }
    .right{
      .right_top{
        position: absolute;
        top: 90px;
        right: 1px;
        height: 312px;
        width: 567px;
        background: url("../../../static/img/right-top.png");
        .right_top_title{
          font-size: 18px;
          color: #FFFFFF;
          padding: 50px 0 0 110px;
        }
        .right_top_line{
          margin-left:100px;
        }
      }
      .right_bottom{
        height: 680px;
        width: 592px;
        position: absolute;
        bottom: 10px;
        right: 1px;
        background: url("../../../static/img/right-bottom.png") 100% 100%;
        .right_bottom_title{
          font-size: 18px;
          color: #FFFFFF;
          padding: 50px 0 0 190px;
        }
        .table-box{
          height: 530px;
          width: 380px;
          overflow: hidden;
          position: relative;
          margin: 20px 0 0 180px;
          .table-header{
            font-size: 0;
            z-index: 1000;
            position: absolute;
            width: 100%;
            color: #0694CE;
            span{
              display: inline-block;
              height: 40px;
              line-height: 40px;
              text-align: center;
              font-size:14px;
              font-family:MicrosoftYaHei;
              font-weight:400;
            }
            .header-item1{
              width: 24%;
            }
            .header-item2{
              width: 30%;
            }
            .header-item3{
              width: 20%;
            }
            .header-item4{
              width: 26%;
            }
          }
          .table-content{
            padding-top: 50px;
            .item-back1{
              background: rgba(0,180,255,0.15);
            }
            .item-back2{
              background: rgba(0,180,255,0);
            }
            .row{
              font-size: 0;
              cursor: pointer;
              &:hover{
                background: rgba(0,180,255,0.3);
              }
              .text-ind{
                text-indent: -27px;
              }
              .items{
                display: inline-block;
                width: 22%;
                white-space: nowrap;
                overflow: hidden;
                font-size:12px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color: #FFFFFF;
                text-align: center;
                line-height: 48px;
                margin: 0 3px;
                span{
                  text-align: left;
                  display: inline-block;
                  width: 500px;
                  box-sizing: border-box;
                  padding-left: 250px;
                  margin-left: -230px;
                  height: 100%;
                  line-height: 38px;
                }
                .moves{
                  animation: transverse 4s linear infinite;
                }
                @keyframes transverse {
                  0%{
                    padding-left: 360px;
                  }
                  100%{
                    padding-left: 0;
                  }
                }
              }
              .width1{
                width: 28%;
              }
              .width2{
                width: 20%;
              }
              .width3{
                width: 20%;
              }
            }
          }
        }
      }
    }
  }
</style>
