/**
* 作者: zhaoyong
* 日期: 2020-01-07
* 描述: 首页
*/
<template>
  <div class='indexs'>
    <div class='left-top'>
      <div class='big-title'>已接入医疗机构</div>
      <div class='charts'>
        <div class='progress'>
          <div class='left-img'>
            <div class='disgraceful'></div>
            <alreadyCharts></alreadyCharts>
          </div>
          <div class='allready-num'>
            <div class='nows-num'>16</div>
            <div class='nows-title'>现进度</div>
          </div>
        </div>
        <div class='already-insert'>
          <hospitalCharts></hospitalCharts>
        </div>
      </div>
    </div>
    <div class='center-numbers'>
      <div :class='["items",active == 1?"actvie":"","item1"]' @click='changeActive(1)'>
        <div class='numbers-title'>门急诊人次 / 人</div>
        <div class='numbers'>
          <countTo :startVal='outpatientCount.start' :endVal='outpatientCount.total' :duration='duration'></countTo>
        </div>
      </div>
      <div :class='["items",active == 2?"actvie":"","item2"]' @click='changeActive(2)'>
        <div class='numbers-title'>在院人数 / 人</div>
        <div class='numbers'>
          <countTo :startVal='inpatientCount.start' :endVal='inpatientCount.total' :duration='duration'></countTo>
        </div>
      </div>
      <div :class='["items",active == 3?"actvie":"","item3"]' @click='changeActive(3)'>
        <div class='numbers-title'>门急费用 / 元</div>
        <div class='numbers'>
          <countTo :startVal='outpatientFee.start' :endVal='outpatientFee.total' :duration='duration'></countTo>
        </div>
      </div>
      <div :class='["items",active == 4?"actvie":"","item4"]' @click='changeActive(4)'>
        <div class='numbers-title'>住院费用 / 元</div>
        <div class='numbers'>
          <countTo :startVal='inpatientFee.start' :endVal='inpatientFee.total' :duration='duration'></countTo>
        </div>
      </div>
    </div>
    <div class='right-top'>
      <linChart></linChart>
    </div>
    <div class='left-bottom'>
      <div class='titles'>
        <span class='big-title'>实时数据排行</span>
        <span class='project-name'>({{subTitle}})</span>
      </div>
      <div class='charts-box'>
        <el-scrollbar style='height: 100%;width: 360px'>
          <div class='left-center'>
            <div class='left-number'>
              <div class='item-height' v-for='item,index in barChartData.severData' :key='index'>
                <div :class='["number-item", index <= 2 ? "border-red":"border-blue"]'>{{index<9?`0${index +1}`:index+1}}</div>
              </div>
            </div>
            <div class='right-charts'>
              <barChart :options='barChartData'></barChart>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div class='right-bottom'>
      <div class='right'>
        <div class='right-bottom1'>
          <div class='left-card heig marg-top'>
            <h3 class='card-title'>业务流</h3>
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
    </div>
    <div>
      <!--<svgMap></svgMap>-->
    </div>
    <div class='middle'>
      <middle></middle>
    </div>
  </div>
</template>

<script>
  import linChart from './lineChart'
  import barChart from './barCharts'
  import hospitalCharts from './hospitalCharts'
  import alreadyCharts from './alreadyCharts'
  import middle from './middle/middle'
  import svgMap from './svgMaps'
  import countTo from 'vue-count-to';
    export default {
      name: "index",
      components: {
        linChart,
        barChart,
        hospitalCharts,
        alreadyCharts,
        countTo,
        alreadyCharts,
        middle,
        svgMap
      },
      props: [],
      data() {
        return {
          duration: 3000,//滚动时间
          active:2,
          //门诊人次
          outpatientCount:{
            start:0,
            total:36214,
            list:[]
          },
          //在院人数
          inpatientCount:{
            start:0,
            total:18547,
            list:[]
          },
          //门诊费用
          outpatientFee:{
            start:0,
            total:9994,
            list:[]
          },
          //住院费用
          inpatientFee:{
            start:0,
            total:15454,
            list:[]
          },
          //数据排行子标题
          subTitle:'在院人数',
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
          barChartData: {
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
            ],
            height: 300
          }
        }
      },
      mounted() {
        setTimeout(()=>{
          this.barChartData.severData[0].value = 450
        },5000)
      },
      methods: {
        changeActive(val){
          let that = this;
          that.active = val;
          if(val == 1){
            that.subTitle = '门急诊人次'
          }else if(val == 2){
            that.subTitle = '在院人数'
          }else if(val == 3){
            that.subTitle = '门诊费用'
          }else if(val == 4){
            that.subTitle = '住院费用'
          }
        },
        //业务流
        movebox(){
          let vm = this;
          vm.timer2 =setInterval(()=>{
            if(vm.dataArray.length){
              vm.tableData.unshift(vm.dataArray.pop())
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
          let time11 = datas.length * 440
          if(heights){
            nodes.css("marginTop",-heights * datas.length + 'px')
          }else {
            nodes.css("marginTop",-90 * datas.length + 'px')
          }
          nodes.stop(true,true).animate({"marginTop": "0" },500)
          vm.tableFlag = true;
        },
      }
    }
</script>

<style scoped lang='less'>
  .indexs{
    background: url("../../../static/img/newBack.png") no-repeat;
    background-size: 100% 100%;
    height: 1080px;
    min-width: 1920px;
    /*width: 2460px;*/
    color: aqua;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .left-top{
      background: url("../../../static/img/left-top.png") no-repeat;
      height: 312px;
      width: 567px;
      position: absolute;
      top: 85px;
      left: 0;
      padding:49px;
      z-index: 10;
      transform: translateX(-567px);
      animation: leftTop .4s ease-out forwards;
      .charts{
        height: 202px;
        .progress{
          display: inline-block;
          height: 100%;
          position: relative;
          width: 140px;
          padding-left: 10px;
        }
        .allready-num{
          position: absolute;
          width: 84px;
          height: 84px;
          top: 50%;
          left:50%;
          margin-left: -42px;
          margin-top: -42px;
          text-align: center;
          padding-top: 21px;
          box-sizing: border-box;
          border-radius: 50%;
          .nows-num{
            color: #FF4A53;
            font-size: 22px;
            font-weight: bold;
          }
          .nows-title{
            color: #FFffff;
            font-size: 14px;
          }
        }
        .left-img{
          width: 136px;
          height: 136px;
          background: url("../../../static/img/already.png") no-repeat;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
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
        .disgraceful{
          width: 83px;
          height: 83px;
          position: absolute;
          background: rgba(0,0,0,.8);
          border-radius: 50%;
          top: 28px;
          left: 28px;
          animation: alreadys 4s ease infinite;
        }
        @keyframes alreadys {
          0% {
            background: rgba(0,0,0,.7);
          }
          50% {
            background: rgba(0,0,0,0);
          }
          100% {
            background: rgba(0,0,0,.7);
          }
        }
        .already-insert{
          display: inline-block;
          padding-left: 50px;
        }
      }
    }
    @keyframes leftTop {
      0% {
        transform: translateX(-576px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .center-numbers{
      height: 100px;
      width: 800px;
      position: absolute;
      top: 140px;
      left: 50%;
      margin-left: -400px;
      display: flex;
      justify-content: space-between;
      .items{
        height: 71px;
        width: 171px;
        text-align: center;
        color: #00CBFF;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        cursor: pointer;
        .numbers{
          background: url("../../../static/img/nomals.png") no-repeat;
          height: 71px;
          width: 171px;
          text-align: center;
          line-height: 71px;
          font-size:26px;
          font-weight:bold;
          overflow: hidden;
          transition: all ease-in-out .3s;
        }
      }
      .item1{
        transform: translateY(-240px);
        animation: item1 .4s .5s ease-in-out forwards;
      }
      .item2{
        transform: translateY(-240px);
        animation: item1 .4s 1s ease-in-out forwards;
      }
      .item3{
        transform: translateY(-240px);
        animation: item1 .4s 1.5s ease-in-out forwards;
      }
      .item4{
        transform: translateY(-240px);
        animation: item1 .4s 2s ease-in-out forwards;
      }
      @keyframes item1 {
        0% {
          transform: translateY(-240px);
        }
        100% {
          transform: translateY(0);
        }
      }
      .actvie{
        color: #FF7343;
        .numbers{
          background: url("../../../static/img/actives.png") no-repeat;
          height: 71px;
          width: 171px;
          text-align: center;
          line-height: 71px;
          font-size:26px;
          font-weight:bold;
          overflow: hidden;
        }
      }
    }
    .right-top{
      background: url("../../../static/img/right-top.png") no-repeat;
      height: 312px;
      width: 567px;
      position: absolute;
      top: 85px;
      right: 0;
      padding: 48px 40px 40px 114px;
      box-sizing: border-box;
      z-index: 10;
      transform: translateX(567px);
      animation: rightTop .4s 2.5s ease-in-out forwards;
    }
    @keyframes rightTop {
      0% {
        transform: translateX(576px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .big-title{
      font-size:18px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      z-index: 10;
    }
    .left-bottom{
      background: url("../../../static/img/left-bottom.png") no-repeat;
      width: 592px;
      height: 680px;
      position: absolute;
      bottom: 14px;
      left: 0;
      padding: 49px;
      box-sizing: border-box;
      z-index: 10;
      transform: translateX(-592px);
      animation: leftBottom .4s  ease-in-out forwards;
      .project-name{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        padding-left: 10px;
      }
      /deep/.el-scrollbar__wrap{
        overflow-x: hidden;
      }
      .charts-box{
        /*padding: 12px 0 0 0;*/
        width: 320px;
        height: 550px;
        .left-center{
          display: flex;
          .left-number{
            /*height: 550px;*/
            flex-basis: 40px;
            padding-right: 10px;
            /*padding-top: 5px;*/
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
    @keyframes leftBottom {
      0% {
        transform: translateX(-592px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .right-bottom{
      background: url("../../../static/img/right-bottom.png") no-repeat;
      width: 592px;
      height: 680px;
      position: absolute;
      bottom: 14px;
      right: 0;
      z-index: 10;
      transform: translateX(592px);
      animation: rightBottom .4s 2.5s ease-in-out forwards;
    }
    .middle{
      position: absolute;
      width:1120px ;
      height: 920px;
      bottom: 37px;
      left: 50%;
      border: 1px solid red;
      margin-left: -560px;
      /*background: #f0c78a;*/

    }
    @keyframes rightBottom {
      0% {
        transform: translateX(592px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .right{
      width: 380px;
      padding: 45px;
      padding-right: 0;
      padding-top: 50px;
      padding-left: 180px;
      .heig{
        height: 555px;
      }
      .right-bottom1{
        height: 557px;
        .card-title{
          font-size: 18px;
        }
        .table-box{
          height: 530px;
          overflow: hidden;
          position: relative;
          padding-top: 20px;
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
