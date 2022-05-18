import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useSpring, animated, config } from "@react-spring/three";
import filePathL from './lanterns.glb'

export default function Lantern({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF(filePathL)

    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const { scale } = useSpring({
        scale: hover ? '1.5' : '1',
        config: config.wobbly
    })

    const { position } = useSpring({
        from: { position: [-1.36, 0.62, 1.53] },
        to: {
            position: [-1.36, 0.90, 1.53]
        },
        config: { mass: 1, tension: 180, friction: 12, duration: 3000 },
        loop: { reverse: true },
    })


    return (
        <group ref={group} {...props} dispose={null} position={[0.5, 1, 0.5]} rotation={[0, 40, 0]}>
            <animated.group position={position} rotation={[Math.PI, -1.2, Math.PI]}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                onClick={(event) => setActive(!active)}
                scale={scale}>
                <mesh geometry={nodes.Plane.geometry} material={materials.Material} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials.lantern_holder_color} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.fire} />
                <mesh geometry={nodes.Plane_3.geometry} material={materials.OH_Outline_Material} />
                <Html style={{ display: active ? 'block' : 'none', }}>
                    <div className='card'>
                        <div className='card-header'>
                            My Educational Background
                        </div>
                        <p className='card_content_p'>I finished my college degree at Holy Trinity College with the course of BSCPE</p>
                        <p className='card_content_p'><strong>Bachelor of Science in Computer Engineering</strong></p>
                        <p className='card_content_p'>on October 25 2021</p>
                    </div >
                </Html>

            </animated.group>
        </group>
    )
}

useGLTF.preload(filePathL)
