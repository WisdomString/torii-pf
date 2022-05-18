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
        from: { position: [-2.58, 0.5, -1.31] },
        to: {
            position: [-2.58, 0.8, -1.31]
        },
        config: { mass: 1, tension: 180, friction: 12, duration: 3400 },
        loop: { reverse: true },
    })


    return (
        <group ref={group} {...props} dispose={null} position={[0.5, 1, 0.5]} rotation={[0, 40, 0]}>
            <animated.group position={position} rotation={[0, -0.98, 0]}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                onClick={(event) => setActive(!active)}
                scale={scale}>
                <mesh geometry={nodes.Plane.geometry} material={materials.Material} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials.lantern_holder_color} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.fire} />
                <mesh geometry={nodes.Plane_3.geometry} material={materials.OH_Outline_Material} />
                <Html style={{ display: active ? 'block' : 'none' }}>
                    <div className='card'>
                        <div className='card-header'>
                            About Me
                        </div>
                        <p className='card_content_p'>Well, im just a web UI freelancer from fiiver.com that just graduated last year.
                            I don't have enough experience yet but i can adapt fast in any tech related environment.
                            I do have skills but I know im still lacking hence even after graduating/getting credentials, I still continue honing my skills and study again via tutorials or online courses, well what could i do when it's still pandemic outbreak.
                            Rightnow im still looking for a direction in life that i could fit in perfectly.
                            By the way, im still learning new things while building this website.
                            Even now im still working on media queries on this site's CSS, that's why its still clungky but hey! it works on most devices.
                            You can check my skills from other lanterns. Just keep pressing things , you might find some easter eggs i hid</p>
                    </div >
                </Html>
            </animated.group>
        </group>
    )
}


useGLTF.preload(filePathL)
