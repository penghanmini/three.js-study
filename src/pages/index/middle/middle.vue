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
    <svg class='svg-class'  width='1120' height='920' xmlns='http://www.w3.org/2000/svg' version="1.1">
        <defs>
          <g id='hospital-circle'>
            <circle cx='0' cy='0' r='5' filter="url(#Gaussian_Blur)" fill='url(#circle-color)'></circle>
          </g>
          <radialGradient id="circle-color" cx="50%" cy="50%" r="50%"
          >
            <stop offset="0%" style="stop-color:#fff;
stop-opacity:1"/>
            <stop offset="100%" style="stop-color:#F4945B;
stop-opacity:.5"/>
          </radialGradient>
        </defs>
        <defs>
          <filter id="Gaussian_Blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
      <defs class='m-defs'  v-for='item,i in arr' :key='i'>
        <mask  :id="item.maskId">
          <circle :id='item.circleId'  r='50'  fill="url(#grad1)"/>
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
      <g class='map' >
        <image href="../../../../static/img/map-light.png" x='273' y='269' alt="" width='710' height='545'></image>
        <use class='use-animations' v-for='item,index in arr' :key='index' id="shuangnan" :x='item.X' :y='item.Y'  xlink:href="#hospital-circle"/>
      </g>
      <g>
        <image href="../../../../static/img/heart.png" x='843' y='140' alt="" width='86' height='152'></image>
      </g>
    </svg>
    <svg id="接入医院连线" xmlns="http://www.w3.org/2000/svg" width="457.124" height="377.281" viewBox="0 0 457.124 377.281">
    </svg>
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
            // M168,478s75.54-150.033,242-122
            // M400,400 Q543,100 843,240
            pathArr:[
              {
              pathColor:"#FFF",//线颜色
              d:"M400,400 843,240",//线路径
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
            arr:[

            ]
          }
        },
        mounted() {
          let vm=this;
          // vm.pathArr.forEach((v)=>{
          //   vm.flyFunction(v)
          // })
          var arrs=[ {X: 894, Y: 409},
            {X: 941, Y: 410},
            {X: 925, Y: 430},
            {X: 907, Y: 449},
            {X: 899, Y: 441},
            {X: 895, Y: 451},
            {X: 915, Y: 459},
            {X: 923, Y: 497},
            {X: 881, Y: 455},
            {X: 881, Y: 489},
            {X: 911, Y: 517},
            {X: 852, Y: 518},
            {X: 832, Y: 512},
            {X: 849, Y: 484},
            {X: 860, Y: 462},
            {X: 861, Y: 452},
            {X: 864, Y: 435},
            {X: 874, Y: 423},
            {X: 861, Y: 392},
            {X: 832, Y: 416},
            {X: 816, Y: 458},
            {X: 841, Y: 551},
            {X: 850, Y: 559},
            {X: 859, Y: 574},
            {X: 873, Y: 561},
            {X: 911, Y: 596},
            {X: 889, Y: 567},
            {X: 902, Y: 574},
            {X: 828, Y: 390},
            {X: 800, Y: 372},
            {X: 792, Y: 387},
            {X: 777, Y: 409},
            {X: 752, Y: 391},
            {X: 772, Y: 427},
            {X: 760, Y: 437},
            {X: 750, Y: 431},
            {X: 750, Y: 421},
            {X: 764, Y: 395},
            {X: 762, Y: 368},
            {X: 730, Y: 358},
            {X: 729, Y: 381},
            {X: 697, Y: 388},
            {X: 719, Y: 414},
            {X: 702, Y: 458},
            {X: 687, Y: 432},
            {X: 663, Y: 422},
            {X: 625, Y: 388},
            {X: 653, Y: 369},
            {X: 646, Y: 418},
            {X: 659, Y: 470},
            {X: 659, Y: 442},
            {X: 639, Y: 454},
            {X: 655, Y: 499},
            {X: 618, Y: 440},
            {X: 635, Y: 403},
            {X: 622, Y: 414},
            {X: 600, Y: 409},
            {X: 593, Y: 432},
            {X: 569, Y: 432},
            {X: 573, Y: 479},
            {X: 525, Y: 425},
            {X: 525, Y: 407},
            {X: 540, Y: 394},
            {X: 550, Y: 382},
            {X: 576, Y: 368},
            {X: 576, Y: 352},
            {X: 554, Y: 365},
            {X: 513, Y: 349},
            {X: 483, Y: 359},
            {X: 482, Y: 385},
            {X: 486, Y: 407},
            {X: 462, Y: 372},
            {X: 388, Y: 410},
            {X: 327, Y: 427},
            {X: 355, Y: 466},
            {X: 350, Y: 584},
            {X: 388, Y: 556},
            {X: 384, Y: 590},
            {X: 416, Y: 565},
            {X: 482, Y: 507},
            {X: 482, Y: 526},
            {X: 482, Y: 621},
            {X: 392, Y: 677},
            {X: 517, Y: 695},
            {X: 600, Y: 590},
            {X: 502, Y: 362},]
          arrs.forEach((v,i)=>{
            v.pathColor = '#FFF';
            v.d = `M${v.X},${v.Y} 843,240`;
            v.lineId = 'shuangnan'+i;
            v.flylineId = 'FFF'+i;
            v.flylineColor = 'red';
            v.maskId = 'red'+i;
            v.circleId = 'redasda'+i;
            v.durTime = 3000;

          })
          vm.arr=arrs;
          setTimeout(()=>{
            vm.arr.forEach((v)=>{
              vm.flyFunction(v)
            })
          },0)

        },
        methods: {
          flyFunction(v){
            const svg=d3.select("svg");
            const path= svg.append("path")
              .attr("fill","none")
              .attr("stroke","#fff")
              .attr("stroke-width","1px")
              .attr("d",v.d)
              .attr("id",v.lineId);
            const pathline=path.node();
            const len=pathline.getTotalLength();
            const mCircle = svg.select('#'+v.circleId)
            const animate = () => {
              svg.select('#'+v.flylineId).remove()
              svg.append('path')
                .attr('stroke', 'red')
                .attr('fill', 'none')
                .attr('id', v.flylineId)
                .attr('stroke-width', '5px')
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
                    console.log(p);
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
            animate()
            setInterval(animate, v.durTime)
          }
        },
      destroyed(){
          // clearInterval();
      }
    }
</script>

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
    animation: crle 1s 2s ease-in infinite;
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
</style>
