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
                        <p className='card_content_p'>
My name is Vince Ivan, Im a graduate of Computer Engineering from HTC.Currently working as a Tech Support Engineer at Calltek Gensan.
I do apologize for this website's controls, I'm still learning to make responsive controls. Heck even this website's CSS codes is a bit wonky too.
Anyways, I created this portfolio website to show atleast some of my skills in web development. Click other Lanterns to see more info about me...
Haven't updated this website for a while and will resume this project if i had tine </p>
                    </div >
                </Html>
            </animated.group>
        </group>
    )
}


useGLTF.preload(filePathL)
