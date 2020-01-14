/**
* 作者: penghan
* 日期: 2019-12-24
* 描述: 创建场景
*/
<template>
    <div id="createScene">
      <div class="title">创建一个场景</div>
      <div>需要三个对象：场景、相机和渲染器。</div>
      <div v-highlight><pre><code v-html="code"></code></pre></div>
      <div>第一个参数：<b>视野角度</b></div>
      <div>第二个参数：<b>长宽比</b></div>
      <div>第三个参数：<b>近截面</b></div>
      <div>第四个参数：<b>远截面</b></div>
    </div>
</template>

<script>
    export default {
        name: "createScene",
        components: {},
        props: [],
        data() {
            return {
              code: 'var scene = new THREE.Scene();//场景\n' +
                'var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//相机\n' +
                'var renderer = new THREE.WebGLRenderer();//渲染器\n' +
                'renderer.setSize( window.innerWidth, window.innerHeight );\n' +
                'document.body.appendChild( renderer.domElement );\n\n' +
                'var geometry = new THREE.BoxGeometry(2,2,2);\n' +
                'var material = new THREE.MeshBasicMaterial( {color: 0x409EFF} );\n' +
                'var mesh = new THREE.Mesh( geometry, material);\n' +
                'scene.add(vm.mesh);\n' +
                'camera.position.z = 5;\n' +
                'renderer.setClearColor(0xFAECD8,1);\n' +
                '\n' +
                'function render(){\n' +
                ' requestAnimationFrame(render);\n' +
                ' mesh.rotation.x += 0.01;\n' +
                ' mesh.rotation.y += 0.01;\n' +
                ' renderer.render(scene,camera);\n' +
                '}\n' +
                '\n' +
                'render();',
            }
        },
        mounted() {
          let vm = this;
          vm.create();
        },
        methods: {
          create(){
            let vm = this;
            var scene = new vm.three.Scene();//场景
            var camera = new vm.three.PerspectiveCamera(75, 200/175, 0.1, 1000);//相机
            var renderer = new vm.three.WebGLRenderer({antialias: true});//渲染器
            renderer.setSize(400,350);
            document.getElementById('createScene').appendChild( renderer.domElement);

            var geometry = new vm.three.BoxGeometry(2,2,2);
            var material = new vm.three.MeshBasicMaterial({color: 0x409EFF});
            var mesh = new vm.three.Mesh( geometry, material);
            // material.wireframe=true;
            scene.add(mesh);


            camera.position.z = 5;
            renderer.setClearColor(0xFAECD8,1);

            var light = new vm.three.PointLight( 0xffffff );
            light.position.copy( camera.position );
            scene.add( light );

            function render(){
              requestAnimationFrame(render);
              mesh.rotation.x += 0.01;
              mesh.rotation.y += 0.01;
              renderer.render(scene,camera);
            }
            render();
          },
          createLine(){
            var scene = new vm.three.Scene();
            var camera = new vm.three.PerspectiveCamera(75,200/175, 0.1, 1000);
            var renderer = new vm.three.WebGLRenderer({antialias: true});
            renderer.setSize(400,350);
            document.getElementById('createScene').appendChild( renderer.domElement);
          },
        }
    }
</script>

<style scoped lang='less'>
  #createScene{
    code{
      background-color: rgb(244, 244, 245);
      color: #606266;
    }
  }
</style>
