import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useSpring, animated, config } from "@react-spring/three";
import filePathL from './lanterns.glb'
import RmB from './images/right_mouse.png'
import LmB from './images/left_mouse.png'

export default function Lantern({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(filePathL)

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);


  const { scale } = useSpring({
    scale: hover ? '1.5' : '1',
    config: config.wobbly,
  })

  const { position } = useSpring({
    from: { position: [0.89, 1.07, -1.64] },
    to: {
      position: [0.89, 1.20, -1.64]
    },
    config: { mass: 1, tension: 180, friction: 12, duration: 2000 },
    loop: { reverse: true },
  })

  return (

    <group ref={group} {...props} dispose={null} position={[0.5, 1, 0.5]} rotation={[0, 40, 0]}>
      <animated.group position={position} rotation={[0, -0.86, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        onClick={(event) => setActive(!active)}
        scale={scale}>
        <mesh geometry={nodes.Plane.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.lantern_holder_color} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.fire} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.OH_Outline_Material} />
        <Html style={{ display: active ? 'none' : 'block', pointerEvents: 'none' }}>
          <div className='card'>
            <div className='card-header'>
              My name is Vince Ivan and this is my portfolio
            </div>
            <p className='card_content_p'>Instructions to navigate around</p>
            <div className='card_content_wrapper'>
              <div className='ico_p_wrapper'><img src={LmB} alt='ico' className='mouse_ico' />
                <p className='ico_p'>Left click to Navigate</p>
              </div>
              <div className='ico_p_wrapper'><img src={RmB} alt='ico' className='mouse_ico' />
                <p className='ico_p'>Right click to Span</p>
              </div>
            </div>
            <p className='card_content_p'>You can also use scroll to zoom in and out</p>
            <p className='card_content_p'>
              <strong>as for mobile phone users</strong>
            </p>
            <p className='card_content_p'>swipe to navigate, 2 fingers to span and pinch to zoom in and out.</p>
            <p className='card_content_p'>Note: press/click the lanterns for more info</p>
          </div >
        </Html >
      </animated.group >
    </group >
  )
}

useGLTF.preload(filePathL)
