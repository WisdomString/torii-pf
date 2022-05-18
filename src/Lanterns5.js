import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useSpring, animated, config } from "@react-spring/three";
import filePathL from './lanterns.glb'

//pictures
import vince_B from './images/vince-b.jpg'
import appleTree from './images/applepic.jpg'
import iceBg from './images/ice.png'
import cubeLogo from './images/cubelogo.PNG'
import techCube from './images/pr-1.jpg'


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
        from: { position: [2.16, 1.48, 0.74] },
        to: {
            position: [2.16, 1.90, 0.74]
        },
        config: { mass: 1, tension: 180, friction: 12, duration: 2500 },
        loop: { reverse: true },
    })


    return (
        <group ref={group} {...props} dispose={null} position={[0.5, 1, 0.5]} rotation={[0, 40, 0]}>
            <animated.group position={position} rotation={[0, -1.22, 0]}
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
                            Some of my projects:
                        </div>
                        <div className='card_content_wrapper' style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='ico_p_wrapper' style={{ width: '100%' }}><img src={vince_B} alt='pic' style={{ width: 'auto', height: '10vh' }} />
                                <p className='ico_p'>My FB Name Banner</p>
                            </div>
                            <div className='ico_p_wrapper' style={{ width: '100%' }}><img src={appleTree} alt='pic' style={{ width: 'auto', height: '10vh', marginTop: '20px' }} />
                                <p className='ico_p'>Apple-Tree on codepen</p>
                            </div>
                            <div className='ico_p_wrapper' style={{ width: '100%' }}><img src={iceBg} alt='pic' style={{ width: 'auto', height: '10vh' }} />
                                <p className='ico_p'>Ice</p>
                            </div>
                            <div className='ico_p_wrapper' style={{ width: '100%' }}><img src={techCube} alt='pic' style={{ width: 'auto', height: '10vh' }} />
                                <p className='ico_p'>Tech wallpaper</p>
                            </div>
                            <div className='ico_p_wrapper' style={{ width: '100%' }}><img src={cubeLogo} alt='pic' style={{ width: 'auto', height: '10vh' }} />
                                <p className='ico_p'>Wisdom Cube Logo</p>
                            </div>
                        </div>
                    </div>
                </Html>
            </animated.group>
        </group>
    )
}

useGLTF.preload(filePathL)