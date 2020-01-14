/**
* 作者: penghan
* 日期: 2019-12-30
* 描述: 绘制一条直线
*/
<template>
    <div id="lineStudy">
      <div class="title">画线</div>
      <div v-highlight><pre><code v-html="code"></code></pre></div>
    </div>
</template>

<script>
  import * as THREE from 'three'
    export default {
        name: "lineStudy",
        components: {},
        props: [],
        data() {
            return {
              code:'var scene = new THREE.Scene();\n' +
                '\n'+
                'var renderer = new THREE.WebGLRenderer();\n' +
                'renderer.setSize( 400, 375 );\n' +
                'renderer.setClearColor(0xFAECD8,1);\n' +
                'document.getElementById(\'lineStudy\').appendChild( renderer.domElement );\n' +
                '\n' +
                'var camera = new THREE.PerspectiveCamera( 45, 400 / 375, 1, 500 );\n' +
                'camera.position.set( 0, 0, 100 );\n' +
                'camera.lookAt( 0, 0, 0 );\n' +
                '\n' +
                '\n' +
                'var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );\n' +
                '\n' +
                'var geometry = new THREE.Geometry();\n' +
                'geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );\n' +
                'geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );\n' +
                'geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );\n' +
                'geometry.vertices.push(new THREE.Vector3( 0, -10, 0) );\n' +
                'geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );' +
                '\n' +
                'var line = new THREE.Line( geometry, material );\n' +
                '\n' +
                'scene.add( line );\n' +
                'renderer.render( scene, camera );',
            }
        },
        mounted() {
          this.descripteLine();
        },
        methods: {
          descripteLine(){
            let vm = this;
            var scene = new vm.three.Scene();

            var renderer = new vm.three.WebGLRenderer({antialias:true});
            renderer.setSize( 400, 375 );
            renderer.setClearColor(0xFAECD8,1);
            document.getElementById('lineStudy').appendChild( renderer.domElement );

            var camera = new vm.three.PerspectiveCamera( 45, 400 / 375, 1, 500 );
            camera.position.set( 30, 10, 10 );
            camera.lookAt( 0, 0, 0 );


            var material = new vm.three.LineBasicMaterial( { color: 0x409EFF } );

            var geometry = new vm.three.Geometry();
            geometry.vertices.push(new vm.three.Vector3( -10, 0, 0) );
            geometry.vertices.push(new vm.three.Vector3( 0, 10, 0) );
            geometry.vertices.push(new vm.three.Vector3( 10, 0, 0) );
            geometry.vertices.push(new vm.three.Vector3( 0, -10, 0) );
            // geometry.vertices.push(new vm.three.Vector3( -10, 0, 0) );
            geometry.vertices.push(new vm.three.Vector3( 0, 0, 10) );

            var zhoux = new vm.three.LineDashedMaterial({color:0xF56C6C});//红
            var zhouy = new vm.three.LineDashedMaterial({color:0xE6A23C});//黄
            var zhouz = new vm.three.LineDashedMaterial({color:0x67C23A});//绿
            var x = new vm.three.Geometry();
            x.vertices.push(new vm.three.Vector3(-150, 0, 0));
            x.vertices.push(new vm.three.Vector3(150, 0, 0));
            var y = new vm.three.Geometry();
            y.vertices.push(new vm.three.Vector3(0, -150, 0));
            y.vertices.push(new vm.three.Vector3(0, 150, 0));
            var z = new vm.three.Geometry();
            z.vertices.push(new vm.three.Vector3(0, 0, -150));
            z.vertices.push(new vm.three.Vector3(0, 0, 150));

            var line = new vm.three.Line( geometry, material );

            var x = new vm.three.Line(x,zhoux);
            var y = new vm.three.Line(y,zhouy);
            var z = new vm.three.Line(z,zhouz);

            scene.add( line );
            scene.add( x );
            scene.add( y );
            scene.add( z );
            renderer.render( scene, camera );
            function render(){
              // requestAnimationFrame(render);
              renderer.render(scene,camera);
            }
            render();
          },
        }
    }
</script>

<style scoped lang='less'>

</style>
