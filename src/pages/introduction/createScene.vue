/**
* 作者: penghan
* 日期: 2019-12-24
* 描述: 创建场景
*/
<template>
    <div id="createScene">
      <div class="title">创建一个场景</div>
      <div>需要三个对象：场景、相机和渲染器。</div>
      <div v-highlight>
        <pre><code v-html="code"></code></pre>
      </div>
      <div>第一个参数：<b>视野角度</b></div>
      <div>第二个参数：<b>长宽比</b></div>
      <div>第三个参数：<b>近截面</b></div>
      <div>第四个参数：<b>远截面</b></div>
    </div>
</template>

<script>
  import * as THREE from 'three'
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
              scene: null,
              camera: null,
              renderer: null,
              mesh: null,
            }
        },
        mounted() {
          let vm = this;
          vm.create();
        },
        methods: {
          create(){
            let vm = this;
            vm.scene = new THREE.Scene();//场景
            vm.camera = new THREE.PerspectiveCamera(75, 200/175, 0.1, 1000);//相机
            vm.renderer = new THREE.WebGLRenderer();//渲染器
            vm.renderer.setSize(400,350);
            document.getElementById('createScene').appendChild( vm.renderer.domElement);

            var geometry = new THREE.BoxGeometry(2,2,2);
            var material = new THREE.MeshBasicMaterial( {color: 0x409EFF} );
            vm.mesh = new THREE.Mesh( geometry, material);
            vm.scene.add(vm.mesh);
            vm.camera.position.z = 5;
            vm.renderer.setClearColor(0xFAECD8,1);

            function render(){
              requestAnimationFrame(render);
              vm.mesh.rotation.x += 0.01;
              vm.mesh.rotation.y += 0.01;
              vm.renderer.render(vm.scene,vm.camera);
            }

            render();
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
