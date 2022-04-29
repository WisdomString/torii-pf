import filePath from './SET2.glb'
import React, { Suspense, useRef, useState } from 'react'
import { Html, useGLTF, OrbitControls, Loader, PerspectiveCamera, shaderMaterial } from '@react-three/drei'

import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Color, AdditiveBlending } from 'three'
import glsl from 'babel-plugin-glsl/macro'
//import { useSpring, config } from 'react-spring'


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(filePath)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const portalMaterial = useRef()
  useFrame((state, delta) => (portalMaterial.current.uTime += delta))

  return (
    <group ref={group} {...props} dispose={null} position={[0, -0.5, 1]}>

      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <ambientLight intensity={2} decay={2} color="#eaff8e" rotation={[-Math.PI / 2, 0, 0]} />
      </group>

      <group position={[9.25, 9.11, 6.44]} rotation={[0, -0.66, -0.75]}>
        <ambientLight intensity={0.12} decay={2} color="#ffa007" rotation={[-Math.PI / 2, 0, 0]} />
      </group>

      <mesh geometry={nodes['rock-with_bonsai'].geometry} material={materials['base-grey_rock']} position={[-0.46, 0.81, 1.06]} rotation={[0.57, 1.56, -0.57]} scale={[0.2, 0.14, 0.17]} />

      <mesh geometry={nodes['portal-plane'].geometry}

        position={[1.21, 1.40, -1.56]}
        rotation={[Math.PI / 2, 0, 0.60]}
        scale={[0.50, 0, 1]}>
        <portalMaterial ref={portalMaterial} blending={AdditiveBlending} uColorStart="hotpink" uColorEnd="white" />
      </mesh>

      <mesh geometry={nodes['rock-with_bonsai001'].geometry} material={materials.OH_Outline_Material} position={[-0.46, 0.81, 1.06]} rotation={[0.57, 1.56, -0.57]} scale={[0.2, 0.14, 0.17]} />
      <group position={[-0.39, 1.2, 1.05]} rotation={[0.7, 1.52, -0.77]} scale={[0.2, 0.14, 0.17]}>
        <mesh geometry={nodes.Icosphere014.geometry} material={materials.OH_Outline_Material} />
        <mesh geometry={nodes.Icosphere014_1.geometry} material={materials['small-tree']} />
      </group>
      <group position={[-0.76, 0.95, 1.33]} rotation={[3.14, 0.73, 3.14]} scale={0.95}>
        <mesh geometry={nodes.Icosphere016.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Icosphere016_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.38, 1.51, 1]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Sphere005_1.geometry} material={materials['bonsai-leaves']} />
        <mesh geometry={nodes.Sphere005_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.62, 0.75, 0.98]} rotation={[-Math.PI, 1.52, -Math.PI]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['blue-water']} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.14, 2.75, -1.5]} rotation={[0, 0.9, -Math.PI / 2]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Torii_gate-base-red']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.OH_Outline_Material} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['black.001']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['white.001']} />
      </group>
      <group position={[1.03, 2.08, -1.61]} rotation={[1, 0.75, 0.76]}>
        <mesh geometry={nodes.Plane.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.27, 2.08, -1.43]} rotation={[1, 0.75, 0.75]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.89, 2.18, -1.74]} rotation={[1, 0.75, 0.75]}>
        <mesh geometry={nodes.Plane004.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane004_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.41, 2.16, -1.30]} rotation={[1, 0.75, 0.75]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.99, 2.15, -1.61]} rotation={[0, -0.48, 0.04]} scale={0.03}>
        <mesh geometry={nodes.Circle002.geometry} material={materials.shimenawa} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.01, 0, -0.1]} rotation={[-Math.PI, 1.52, -Math.PI]} scale={1.01}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.OH_Outline_Material} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['base-green_cliff']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['base-brown_dirt']} />
      </group>
      <group position={[-1.17, 1.67, -1.55]} rotation={[2.01, 0.82, -0.93]}>
        <mesh geometry={nodes.Plane014.geometry} material={materials.white} />
        <mesh geometry={nodes.Plane014_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.1, 0.94, 1.52]} rotation={[-0.18, 0.47, -2.01]} scale={0.89}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere001_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.15, 0.95, 0.85]} rotation={[-1.25, -1.01, -2.53]} scale={0.91}>
        <mesh geometry={nodes.Sphere003_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere003_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.24, 1.03, 1.03]} rotation={[0.51, -0.77, -2.48]}>
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere004_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.31, 0.99, 1.24]} rotation={[-2.42, 0.72, 1.28]} scale={0.66}>
        <mesh geometry={nodes.Sphere006_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere006_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.28, 0.93, 0.93]} rotation={[-2.17, 0.34, -1.58]}>
        <mesh geometry={nodes.Sphere008_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere008_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.18, 0.95, 1.28]} rotation={[0.08, 0.87, -1.97]} scale={0.4}>
        <mesh geometry={nodes.Sphere009_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere009_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.89, 0.96, 0.58]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere010_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere010_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.02, 0.95, 0.66]} rotation={[-1.2, 0.18, 2.6]}>
        <mesh geometry={nodes.Sphere011_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere011_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.46, -1.24, -0.09]} rotation={[-2.98, -0.69, 0.26]} scale={[-0.76, -1.8, -0.9]}>
        <mesh geometry={nodes.Sphere012_1.geometry} material={materials['base-brown_dirt']} />
        <mesh geometry={nodes.Sphere012_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.38, -1.23, 0.48]} rotation={[0.55, -0.78, -2.91]} scale={[-0.63, -1.06, -0.38]}>
        <mesh geometry={nodes.Sphere014_1.geometry} material={materials['base-brown_dirt']} />
        <mesh geometry={nodes.Sphere014_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.35, -0.67, -0.76]} rotation={[2.84, 0.28, -0.13]} scale={[-0.71, -1.68, -0.83]}>
        <mesh geometry={nodes.Sphere015_1.geometry} material={materials['base-brown_dirt']} />
        <mesh geometry={nodes.Sphere015_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.25, 1.23, -1.73]} rotation={[-0.1, 0.36, 1.65]} scale={[0.93, 0.99, 0.99]}>
        <mesh geometry={nodes.Sphere017_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere017_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.64, 0.96, 1.94]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere018_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere018_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.84, 0.96, -0.89]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere019_1.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere019_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.57, 0.96, -0.52]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere020.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere020_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.91, 0.85, -0.8]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere021.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere021_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.93, 0.96, 1.22]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere022.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere022_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.55, 0.96, -1.75]} rotation={[-1.3, -0.31, 1.33]}>
        <mesh geometry={nodes.Sphere023.geometry} material={materials['base-grey_rock']} />
        <mesh geometry={nodes.Sphere023_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.31, 1.12, -1.78]} rotation={[0, -0.58, 0]} scale={0.07}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['jap-hand-paint-pattern']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['lamp-top-black']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.19, 1.03, -1.8]} rotation={[0, -0.28, 0]} scale={0.03}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['jap-hand-paint-pattern']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['lamp-top-black']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.85, 0.91, 1.09]}>
        <mesh geometry={nodes.Circle.geometry} material={materials['green-leaf-pond']} />
        <mesh geometry={nodes.Circle_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.88, 0.91, 1.24]} rotation={[-Math.PI, 1.28, -Math.PI]}>
        <mesh geometry={nodes.Circle001.geometry} material={materials['green-leaf-pond']} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.95, 0.91, 1.18]} rotation={[-Math.PI, -0.57, -Math.PI]}>
        <mesh geometry={nodes.Circle003.geometry} material={materials['green-leaf-pond']} />
        <mesh geometry={nodes.Circle003_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.2, 1.07, -1.95]} rotation={[0, -1.18, Math.PI]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.3, 0.99, -2.04]} rotation={[-3.09, 1.27, 0]}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1, 0.98, 1.09]} rotation={[-0.02, -0.32, -3.1]} scale={[0.6, 0.62, 0.81]}>
        <mesh geometry={nodes.Cylinder022.geometry} material={materials['grass-water']} />
        <mesh geometry={nodes.Cylinder022_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.57, 1.11, -0.82]} rotation={[-0.08, -1.37, 3.12]}>
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.5, 1.14, -0.86]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder009_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.91, 0.99, 1.39]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials['grass-water']} />
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.49, 0.97, -0.94]} rotation={[-2.3, 1.16, -0.99]} scale={[0.5, 0.79, 0.49]}>
        <mesh geometry={nodes.Cylinder030.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder030_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.34, 0.96, -1.44]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder012.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder012_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.41, 1.1, -1.87]} rotation={[-3.09, 1.27, 0]} scale={[1, 1.52, 1]}>
        <mesh geometry={nodes.Cylinder013.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder013_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.33, 0.99, -1.96]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder014.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder014_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.18, 0.97, -1.95]} rotation={[-3.13, 0.03, 0.05]}>
        <mesh geometry={nodes.Cylinder015.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder015_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.43, 0.99, -1.93]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder016.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder016_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.44, 0.99, -2.11]} rotation={[-0.02, 0.29, -3.09]}>
        <mesh geometry={nodes.Cylinder017.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder017_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[0.52, 0.99, -2.03]} rotation={[-3.09, 1.27, 0]}>
        <mesh geometry={nodes.Cylinder018.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder018_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.61, 1.01, -0.89]} rotation={[-3.09, 1.27, 0]}>
        <mesh geometry={nodes.Cylinder019.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.63, 1.15, -0.97]} rotation={[-0.02, 0.54, -3.08]}>
        <mesh geometry={nodes.Cylinder020.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder020_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.34, 0.93, -1.47]} rotation={[-0.02, -0.76, -3.11]}>
        <mesh geometry={nodes.Cylinder021.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder021_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.31, 0.97, 0.73]} rotation={[-0.01, 0.05, -3.09]}>
        <mesh geometry={nodes.Cylinder023.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder023_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.13, 0.91, 0.69]} rotation={[-0.02, 0.68, -3.08]} scale={[1, 1.76, 1]}>
        <mesh geometry={nodes.Cylinder024.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder024_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.58, 0.96, -0.96]} rotation={[-3.09, 1.27, 0]}>
        <mesh geometry={nodes.Cylinder025.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder025_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.89, 0.97, -2.03]} rotation={[-0.02, 0.29, -3.09]} scale={0.49}>
        <mesh geometry={nodes.Cylinder026.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder026_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[1.99, 0.97, -0.36]} rotation={[-0.02, 0.29, -3.09]} scale={0.49}>
        <mesh geometry={nodes.Cylinder027.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder027_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.83, 0.9, -0.93]} rotation={[-0.02, 0.29, -3.09]} scale={[0.5, 0.71, 0.49]}>
        <mesh geometry={nodes.Cylinder028.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder028_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.11, 0.94, 0.93]} rotation={[-0.16, 1.48, -2.94]} scale={0.49}>
        <mesh geometry={nodes.Cylinder029.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder029_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.01, 0.96, -0.08]} rotation={[0.02, 0.96, -2.85]}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.OH_Outline_Material} />
      </group>

      <group
        position={[1.67, 1.12, -0.7]}
        rotation={[0, 1.29, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        onClick={() => setActive(!active)}
        scale={hovered ? '0.1' : '0.07'}>
        <Html style={{ display: active ? 'block' : 'none' }}>
          <h1>hello</h1>
        </Html>
        <mesh geometry={nodes.Cube002.geometry} material={materials['jap-hand-paint-pattern']} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['lamp-top-black']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.OH_Outline_Material} />
      </group>

      <group position={[1.69, 1.03, -0.59]} rotation={[-Math.PI, 1.55, -Math.PI]} scale={0.03}>
        <mesh geometry={nodes.Cube005.geometry} material={materials['jap-hand-paint-pattern']} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['lamp-top-black']} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.61, 0.98, 0.6]} rotation={[-0.06, -1.31, 3.13]} scale={0.26}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['grass-color']} />
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-0.09, 1.67, -0.19]} rotation={[0, 1.05, -Math.PI]} scale={[0.46, 0.74, 0.46]}>
        <mesh geometry={nodes.Plane019.geometry} material={materials['base-brown_dirt']} />
        <mesh geometry={nodes.Plane019_1.geometry} material={materials.OH_Outline_Material} />
      </group>
      <group position={[-1.67, 0.96, 0.66]} rotation={[-0.01, 1.44, 3.14]} scale={[1.01, 1.29, 0.62]}>
        <mesh geometry={nodes.Plane010.geometry} material={materials.wood} />
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.OH_Outline_Material} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials.black} />
      </group>
    </group>
  )
}
extend({
  PortalMaterial: shaderMaterial(
    { uTime: 0, uColorStart: new Color('hotpink'), uColorEnd: new Color('white') },
    `
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
    glsl`
    #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    varying vec2 vUv;
    void main() {
      vec2 displacedUv = vUv + cnoise3(vec3(vUv * 7.0, uTime * 0.1));
      float strength = cnoise3(vec3(displacedUv * 5.0, uTime * 0.2));
      float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;
      strength += outerGlow;
      strength += step(-0.2, strength) * 0.8;
      strength = clamp(strength, 0.0, 1.0);
      vec3 color = mix(uColorStart, uColorEnd, strength);
      gl_FragColor = vec4(color, 1.0);
    }`,
  ),
})


useGLTF.preload(filePath)

export default function Canvasviewport() {
  return (
    <>
      <Canvas >
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, -1.2, -1]} fov={70} >
            <OrbitControls />
            <Model ></Model>
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}

