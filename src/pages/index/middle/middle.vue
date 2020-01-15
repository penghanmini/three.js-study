/**
* 作者: jsz
* 日期: 2020-01-10
* 描述:
*/
<template>
  <div class='middle-3D'>
    <div class='bottom-circle1'>
      <img src="../../../../static/img/bottom-circle.png" alt="" width='356' height='356'>
    </div>
    <div class='bottom-circle2'>
      <img src="../../../../static/img/bottom-circle.png" alt="" width='500' height='500'>
    </div>
    <div class='bottom-circle3'>
      <img src="../../../../static/img/bottom-circle.png" alt="" width='720' height='720'>
    </div>
    <!--width='1120' height='920'-->
    <!-- width="800" height="550"-->
    <!--viewBox="0 0 2125.98 1559.06"-->
    <svg class='svg-class'  width='1120' height='920' xmlns='http://www.w3.org/2000/svg' version="1.1">
        <defs>
          <g id='hospital-circle'>
            <circle cx='0' cy='0' r='5' filter="url(#Gaussian_Blur)" fill='url(#circle-color)'></circle>
          </g>
          <radialGradient id="circle-color" cx="50%" cy="50%" r="50%"
          >
            <stop offset="0%" style="stop-color:#fff;
stop-opacity:.8"/>
            <stop offset="80%" style="stop-color:#FF7342;
stop-opacity:1"/>
          </radialGradient>
        </defs>
        <defs>
          <filter id="Gaussian_Blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
      <defs class='m-defs'  v-for='item,i in arr' :key='i'>
        <mask  :id="item.maskId">
          <circle :id='item.circleId'  r='20'  fill="url(#grad1)"/>
        </mask>
        <radialGradient
          id="grad1"
          cx="0.5"
          cy="0.5"
          r="0.5" >
          <stop offset="0%" stop-color="#fff" stop-opacity='1'/>
          <stop offset="100%" stop-color="#fff" stop-opacity='0' />
        </radialGradient>
      </defs>
      <!--<defs class='m-defs'>-->
        <!--<mask  id="Mask">-->
          <!--&lt;!&ndash;<circle id="m-circle" cx='100' cy='50' r='50' fill="#fff"/>&ndash;&gt;-->
          <!--<circle  id='m-circle'  r='50' fill="url(#grad1)"/>-->
        <!--</mask>-->
        <!--<radialGradient-->
          <!--id="grad1"-->
          <!--cx="0.5"-->
          <!--cy="0.5"-->
          <!--r="0.5" >-->
          <!--<stop offset="0%" stop-color="#fff" stop-opacity='1'/>-->
          <!--<stop offset="100%" stop-color="#fff" stop-opacity='0' />-->
        <!--</radialGradient>-->
      <!--</defs>-->
      <g class='map-point' >
        <image href="../../../../static/img/map-light.png" x='273' y='269' alt="" width='710' height='545'></image>
        <!--<use class='use-animations' id="shuangnan" x='400' y='400'  xlink:href="#hospital-circle"/>-->
        <!--<use id="shuangnan" x='746.02' y='402.14'  xlink:href="#hospital-circle"/>-->
        <!--<use id="shuangnan" x='680' y='337'  xlink:href="#hospital-circle"/>-->
        <!--<use id="shuangnan" x='921' y='521'  xlink:href="#hospital-circle"/>-->
        <!--<use class='use-animations' id="shuangnan" x='323' y='421'  xlink:href="#hospital-circle"/>-->

        <!--<use class='use-animations' v-for='item,index in arr' :key='index' id="shuangnan" :x='item.X' :y='item.Y'  xlink:href="#hospital-circle"/>-->
      </g>
      <!--<path d='M400,400 Q543,100 843,240' stroke='#fff' fill='none' stroke-dasharray='1' mask='url(#Mask1)' stroke-width='5px'></path>-->

    </svg>
    <div class='hearts'>
      <img  src="../../../../static/img/heart.png"  width='86' height='152' alt="" class='heart-icon'/>
      <span class="particletext bubbles">
        <!--Bubbles-->
        <span v-for='item,index in bubblecount' :key='index' class='particle' :style='{"top":item.top+"%","left":item.left+"%","width":item.size+"px","height":item.size+"px","animation-delay":item.delay+"s",}'></span>
      </span>
    </div>

  </div>
</template>

<script>
  import * as d3 from 'd3'
    export default {
        name: "middle",
        components: {},
        props: [],
      created(){

      },
        data() {
          return {
            bubblecount:[],
            // M168,478s75.54-150.033,242-122
            // M400,400 Q543,100 843,240
            pathArr:[
              {
              pathColor:"#FFF",//线颜色
              d:"M400,400 883,310",//线路径
              lineId:"shuangnan",//线id
              flylineId:"f-shuangnan",//动画id
              flylineColor:"red",//动画颜色
              maskId:"m-shuangnan",//蒙尘id
              circleId:"c-shuangnan",//蒙尘中心圆id
              durTime:3200,
              x:150,
              y:200,
              show:false,
              lineShow:false,
              hospitalName:"",
              number:150,
              title:''
            }
            ],
            svg:"",//
            arr:[],//所有的点的数据
            flyArr:[],//飞线的数组
            rightArr:[],//右下角的数组
            timerArr:{},//定时器
          }
        },
        mounted() {
          let vm=this;
          vm.svg=d3.select("svg")
          var arrs=[
            {
              X: 894,
              Y: 409,
              id:'',
              name:'成空机关医院'
            },
            {
              X: 941,
              Y: 410,
              id:'81271',
              name:'西南民族大学学校医院'
            },
            {
              X: 925,
              Y: 430,
              id:'',
              name:'成都天大不孕不育医院'
            },
            {
              X: 907,
              Y: 449,
              id:'',
              name:'成都维多利亚妇科/女子医院'
            },
            {
              X: 899,
              Y: 441,
              id:'099007',
              name:"成都东大肛肠医院"
            },
            {
              X: 895,
              Y: 451,
              id:'871155',
              name:'成都武侯军盛癫痫病医院'
            },
            {
              X: 915,
              Y: 459,
              id:'812707',
              name:'四川大学望江医院'
            },
            {
              X: 923,
              Y: 497,
              id:'',
              name:'四川大学华西保健医院院'
            },
            {
              X: 881,
              Y: 455,
              id:'812714',
              name:'成都润禾皮肤病专科医院医院'
            },
            {X: 881, Y: 489},
            {
              X: 911,
              Y: 517,
              id:'812715',
              name:'成都安琪儿妇产医院',
            },
            {
              X: 852,
              Y: 518,
              id:'',
              name:'成都棕南妇科医院'
            },
            {
              X: 832,
              Y: 512,
              id:'098006',
              name:'四川何氏骨科医院'
            },
            {
              X: 849,
              Y: 484,
              id:'',
              name:'成都中医药大学第二附属医院'
            },
            {
              X: 860,
              Y: 462,
              id:'094265',
              name:'科学园医院'
            },
            {
              X: 861,
              Y: 452,
              id:'',
              name:'四川省国防医院'
            },
            {
              X: 864,
              Y: 435,
              id:'061011',
              name:'成都市武侯区跳伞塔社区卫生服务中心'
            },
            {
              X: 874,
              Y: 423,
              id:'812708',
              name:'四川大学华西保健医院'
            },
            {
              X: 861,
              Y: 392,
              id:'098004',
              name:'四川省白内障专科医院医院'
            },
            {
              X: 832,
              Y: 416,
              id:'',
              name:'四川大学华西第四医院'
            },
            {
              X: 816,
              Y: 458,
              id:'061005',
              name:'成都市武侯区玉林社区卫生服务中心'
            },
            {
              X: 841,
              Y: 551,
              id:'878555',
              name:'成都天使儿童医院'
            },
            {
              X: 850,
              Y: 559,
              id:'',
              name:'四川中西医结合医院',
            },
            //找不到
            {
              X: 859,
              Y: 574,
              id:'',
              name:'四川肿瘤医院'
            },
            {
              X: 873,
              Y: 561,
              id:'061012',
              name:'成都市武侯区火车南站社区卫生服务中心'
            },
            {
              X: 911,
              Y: 596,
              id:'',
              name:'成都市武侯区郭家桥社区卫生服务站'
            },
            //找不到
            {
              X: 889,
              Y: 567,
              id:'',
              name:'成都惠之民医院'
            },
            // {X: 902, Y: 574},//重复
            {
              X: 828,
              Y: 390,
              id:'098004',
              name:"四川省白内障专科医院医院"
            },
            {
              X: 800,
              Y: 372,
              id:'089009',
              name:'成都金桥医院'
            },
            {
              X: 792,
              Y: 387,
              id:'096006',
              name:'武警成都医院'
            },
            {
              X: 777,
              Y: 409,
              id:'',
              name:'成都慈爱医院'
            },
            {
              X: 752,
              Y: 391,
              id:'094204',
              name:'四川省交通厅公路局成都医院'
            },
            {
              X: 772,
              Y: 427,
              id:'099045',
              name:"成都康桥眼科医院有限公司"
            },
            {
              X: 760,
              Y: 437,
              id:'',
              name:'成都新桥牙科有限公司'
            },
            {
              X: 750,
              Y: 431,
              id:'815451',
              name:'成都白癜风医院'
            },
            {
              X: 750,
              Y: 421,
              id:'812711',
              name:"西南民族大学学校医院"
            },
            {
              X: 764,
              Y: 395,
              id:'095043',
              name:'西藏自治区人民政府驻成都办事处医院'
            },
            {
              X: 762,
              Y: 368,
              id:'061013',
              name:'成都市武侯区浆洗街社'
            },
            {
              X: 730,
              Y: 358,
              id:'098033',
              name:'成都爱尔眼科医院'
            },
            {
              X: 729,
              Y: 381,
              id:'099004',
              name:'成都体育学院附属体育医院'
            },
            {
              X: 697,
              Y: 388,
              id:'061001',
              name:'成都市武侯区双楠社区卫生服务中心'
            },
            {
              X: 719,
              Y: 414,
              id:'095017',
              name:'成都平安医院'
            },
            {
              X: 702,
              Y: 458,
              id:'093083',
              name:"成都市武侯区人民医院"
            },
            {
              X: 687,
              Y: 432,
              id:'850633',
              name:'成都市武侯博仕胃肠病医院'
            },
            {
              X: 663,
              Y: 422,
              id:'099034',
              name:'成都康福肾脏病医院有限公司'
            },
            {
              X: 625,
              Y: 388,
              id:'099017',
              name:'成都博大泌尿外科医院'
            },
            {
              X: 653,
              Y: 369,
              id:'098026',
              name:'四川奥斯迪康骨医院'
            },
            {
              X: 646,
              Y: 418,
              id:'093089',
              name:'成都市武侯区第二人民医院'
            },
            {
              X: 659,
              Y: 470,
              id:'061009',
              name:'武侯区红牌楼社区卫生服务中心'
            },
            {
              X: 659,
              Y: 442,
              id:'',
              name:'成都医学院附属不孕不育医院'
            },
            {
              X: 639,
              Y: 454,
              id:'831400',
              name:'成都双楠医院'
            },
            {
              X: 655,
              Y: 499,
              id:'819000',
              name:'成都博润白癜风医院'
            },
            {
              X: 618,
              Y: 440,
              id:'844283',
              name:'成都西南脑科医院'
            },
            {
              X: 635,
              Y: 403,
              id:'',
              name:'',//PDF地图无名字
            },
            {
              X: 622,
              Y: 414,
              id:'862131',
              name:'成都武侯川蜀血管病医院'
            },
            {
              X: 600,
              Y: 409,
              id:'094209',
              name:'成都九星医院'
            },
            {
              X: 593,
              Y: 432,
              id:'099036',
              name:'四川肛肠医院'
            },
            {
              X: 569,
              Y: 432,
            },
            {
              X: 573,
              Y: 479,
              id:'',
              name:'成都武侯新纪元医院',
            },
            {
              X: 525,
              Y: 425,
              id:'870492',
              name:'四川现代医院',
            },
            {
              X: 525,
              Y: 407,
              id:'',
              name:'机投果堰社区卫生服务站',
            },
            {
              X: 540,
              Y: 394,
              id:'',
              name:'晋阳晋吉北路卫生服务站',
            },
            {
              X: 550,
              Y: 382,
              id:'061003',
              name:'成都市武侯区晋阳社区卫生服务中心',
            },
            {X: 576, Y: 368},
            {
              X: 576,
              Y: 352,
              id:'',
              name:'成都行话医院有限责任公司',
            },
            {
              X: 554,
              Y: 365,
              id:'',
              name:'成通医院',//表格无该医院
            },
            {
              X: 513,
              Y: 349,
              id:'828800',
              name:'四川德森肾脏病医院',
            },
            {
              X: 483,
              Y: 359,
              id:'061008',
              name:'成都市武侯区机投桥社区卫生服务中心',
            },
            {
              X: 482,
              Y: 385,
              id:'818993',
              name:'成都武侯西南医院',
            },
            {
              X: 486,
              Y: 407,
              id:'',
              name:'机投潮音社区卫生服务站',
            },
            {X: 462, Y: 372},//地图无该点
            {X: 388, Y: 410},//地图无该点
            {
              X: 327,
              Y: 427,
              id:'061015',
              name:'成都市武侯区金花桥马家河社区卫生服务站'
            },
            {X: 355, Y: 466},
            {
              X: 350,
              Y: 584,
              id:'061015',
              name:'成都市武侯区金花桥江安河社区卫生服务站'
            },
            {
              X: 388,
              Y: 556,
              id:'093084',
              name:'成都市武侯区第五人民医院'
            },
            {
              X: 384,
              Y: 590,
              id:'061015',
              name:'成都市武侯区金花桥社区卫生服务中心'
            },
            {
              X: 416,
              Y: 565,
              id:'883786',
              name:'成都市武侯区簇桥社区卫生服务中心'
            },
            {
              X: 482,
              Y: 507,
              id:'',
              name:'簇桥团结社区卫生服务站'
            },
            {
              X: 482,
              Y: 526,
              id:'061016',
              name:'成都市武侯区簇锦社区卫生服务中心'
            },
            {
              X: 482,
              Y: 621,
              id:'093088',
              name:'成都市武侯区第三人民医院',
            },
            {
              X: 392,
              Y: 677,
              id:'',
              name:'成都市武侯区金花桥凉水井社区卫生服务站'
            },
            {
              X: 517,
              Y: 695,
              id:'',
              name:'成都武侯川南医院',
            },
            {
              X: 600,
              Y: 590,
              id:'094294',
              name:'中国人民解放军5701厂医院',
            },
            {X: 502, Y: 362},//地图无该点
          ]

          arrs.forEach((v,i)=>{
            v.pathColor = '#FFF';
            v.d = `M${v.X},${v.Y} 880,230`;
            v.lineId = 'shuangnan'+i;
            v.flylineId = 'FFF'+i;
            v.flylineColor = 'red';
            v.maskId = 'red'+i;
            v.circleId = 'redasda'+i;
            v.durTime = 2500;
            v.id=i;
          })
          vm.arr=arrs;

          setTimeout(()=>{
            vm.initLines();
            setInterval(()=>{
              //制造假数据
              vm.rightArr=[];//清空数据
              let radomArr=[];
              for(var i=0;i<10;i++){
                let num=Math.ceil(Math.random()*arrs.length-1);
                radomArr.push(num);
              }
              let  setradomArr=[...new Set(radomArr)];
              setradomArr.forEach((v)=>{
                vm.rightArr.push(vm.arr[v])
              })

              //请求数据
              for(var i=0;i<vm.flyArr.length;i++){
                var item=vm.flyArr[i];
                clearInterval(vm.timerArr[item.lineId]);//移除所有的定时器
                delete vm.timerArr[item.lineId];//删除定时器属性
                vm.svg.select('#'+item.flylineId).remove();//移除对应的飞线
              }
              vm.flyArr=[];
              vm.flyArr=vm.rightArr.map((v,i)=>{
                vm.flyFunction(v,i)
                return v;
              })
              vm.pointLight();//飞线的点闪烁的方法
            },10000)
          },0)

          for(var i=0;i<40;i++){
            let obj = {
              size:this.changeTop(40, 80)/14,
              left:this.changeTop(0,95),
              top:this.changeTop(20,80),
              delay:this.changeTop(0,30)/10,
            }
            vm.bubblecount.push(obj)
          }
        },
        methods: {
          //初始化所有的线  点
          initLines(v){
            let vm=this;
            const svg=d3.select("svg");
            vm.svg.selectAll(".lines").data(vm.arr).enter().append("path")
              .attr("fill","none")
              .attr("stroke",'#F5f5f5')
              .attr("stroke-width","0.5px")
              .attr("d",(d)=>{
                return d.d
              })
              .attr("id",(d)=>{
                return d.lineId
              })
              .attr("class","lines");
          const mapPioints= d3.select(".map-point").selectAll("use").data(vm.arr).enter().append("use");
          // <use class='use-animations' v-for='item,index in arr' :key='index' id="shuangnan" :x='item.X' :y='item.Y'  xlink:href="#hospital-circle"/>
            mapPioints.attr("id",(d)=>{
              return "point"+d.id;
            }).attr("x",(d)=>{
              return d.X;
            }).attr("y",(d)=>{
              return d.Y;
            }).attr("xlink:href","#hospital-circle")

          },
          //让点闪烁的方法
          pointLight(){
            let vm=this;
            vm.arr.forEach((v)=>{
              d3.select("#point"+v.id).attr("class","");
            })
            vm.flyArr.forEach((v)=>{
              d3.select("#point"+v.id).attr("class","use-animations")
            })
            // var ligntpoints= d3.select(".map-point").selectAll("use").data(vm.flyArr);
            // console.log(ligntpoints);
            // ligntpoints.attr("class","use-animations")
          },

          //飞线的方法
          flyFunction(v,i){
            let vm=this;
            const svg=d3.select("svg");
            var path=  svg.select("#"+v.lineId);

            const pathline=path.node();
            const len=pathline.getTotalLength();
            const mCircle = svg.select('#'+v.circleId)
            const animate = () => {
              svg.select('#'+v.flylineId).remove()
              svg.append('path')
                .attr('stroke', '#fff')
                .attr('fill', 'none')
                .attr('id', v.flylineId)
                .attr('stroke-width', '3px')
                .attr('mask', "url(#"+v.maskId+")")
                .transition()
                // .ease(d3.easeLinear)
                .duration(v.durTime)
                .attrTween('d', function(d) {
                  const coord = path.attr('d').replace(/(M|Q)/g, '').match(/((\d|\.)+)/g)
                  var x1 = +coord[0], y1 = +coord[1], // 起点
                    x2 = +coord[2], y2 = +coord[3], // 控制点
                    x3 = +coord[4], y3 = +coord[5]; // 终点
                  return function(t) {
                    const p = pathline.getPointAtLength(t * len);
                    // 根据插值方法进度实时计算当前控制点位置
                    const x = (1 - t) * x1 + t * x2
                    const y = (1 - t) * y1 + t * y2
                    mCircle.attr('cx', p.x)
                      .attr('cy', p.y)

                    // return `M50, 50 Q300,300 600, 50`
                    // Q${x},${y}
                    return `M${x1}, ${y1}  ${p.x}, ${p.y}`
                  }
                })
            }
              animate();
            // setTimeout(animate,2000)
             vm.timerArr[v.lineId]=setInterval(animate, v.durTime)
          },
          changeTop(m,n) {
            m = parseInt(m);
            n = parseInt(n);
            return Math.floor( Math.random() * (n - m + 1) ) + m;
          }
        },
      destroyed(){
          // clearInterval();
      }
    }
</script>
<style>
  .use-animations{
    animation: crle 2.5s  linear infinite;
  }
  @keyframes crle {
    0%{
      opacity: 1;
    }
    15%{
      opacity: .1;
    }
    30%{
      opacity: 1;
    }
    45%{
      opacity: .1;
    }
    60%{
      opacity: 1;
    }
    75%{
      opacity: 0.1;
    }
    90%{
      opacity: 1;
    }
  }
</style>
<style scoped lang='less'>
  .cls-1 {
    fill: none;
    stroke: #519ab2;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke-dasharray: 0.0014;
    fill-rule: evenodd;
  }
.middle-3D{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 1000px;
  /*background: #f3d19e;*/
  .svg-class{
    /*transform: translateZ(-100px) rotateX(-10deg);*/
  }
  .bottom-circle1{
    position: absolute;
    transform: translate(380px,640px) rotateX(106deg);
  }
  .bottom-circle2{
    position: absolute;
    transform: translate(308px,580px) rotateX(106deg);
  }
  .bottom-circle3{
    position: absolute;
    transform: translate(205px,484px) rotateX(106deg);
    img{
      animation: bottom-rotate 13s linear infinite;
    }
  }
  .svg-class{
    position: absolute;

  }
  .use-animations{
    animation: crle 2500s  ease-in infinite;
  }
}
@keyframes crle {
  0%{
    opacity: 1;
  }
  50%{
    opacity: .1;
  }
  100%{
    opacity: 1;
  }
}
@keyframes bottom-rotate {
  0% {
    transform: rotateZ(0deg);
    transform-origin: center;
  }
  100% {
    transform: rotateZ(360deg);
    transform-origin: center;
  }
}
  .textcontainer {

  }
  .particletext {
    text-align: center;
    font-size: 48px;
    position: absolute;
    width: 30px;
    height: 40px;
    display: inline-block;
    left: 26px;
    top: 28px;
  }
  .particletext.bubbles > .particle {
    opacity: 0;
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: #fff;//rgba(33, 150, 243, 1);
    -webkit-animation: bubbles 3s ease-in infinite;
    border-radius: 50%;
    animation: bubbles 3s ease-in infinite;
  }
  @-webkit-keyframes bubbles {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      -webkit-transform: translate(0, -20%);
      transform: translate(0, -20%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translate(0, -1000%);
      transform: translate(0, -1000%);
    }
  }
  .hearts{
    width: 86px;
    height: 152px;
    display: block;
    background: #fff;
    position: absolute;
    right:191px;
    top: 107px;
    z-index: 15;
    background: url("../../../../static/img/heart.png") no-repeat;
    background-size: 86px 152px;
    opacity: 1;
    /*.heart-icon{*/
      /*z-index: 15;*/
      /*animation: heartChange 1s ease-in infinite;*/
    /*}*/
  }
  /*@keyframes heartChange {*/
    /*0%{*/
      /*transform: scale(1);*/
      /*opacity: 1;*/
    /*}*/
    /*50%{*/
      /*transform: scale(1.02);*/
      /*opacity: .95;*/
    /*}*/
    /*100%{*/
      /*transform: scale(1);*/
      /*opacity: 1;*/
    /*}*/
  /*}*/
</style>
