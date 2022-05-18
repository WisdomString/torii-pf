import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useSpring, animated, config } from "@react-spring/three";
import filePathL from './lanterns.glb'
import { AiFillGithub, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

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
        from: { position: [3.7, 0.94, -1.01] },
        to: {
            position: [3.7, 0.54, -1.01]
        },
        config: { mass: 1, tension: 180, friction: 12, duration: 3400 },
        loop: { reverse: true },
    })

    return (
        <group ref={group} {...props} dispose={null} position={[0.5, 1, 0.5]} rotation={[0, 40, 0]}>
            <animated.group position={position} rotation={[Math.PI, -1.19, Math.PI]}
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
                            You can contact me at:
                        </div>
                        <div className='card_content_wrapper'>
                            <div className='ico_p_wrapper'><a className='specials' href='https://discordapp.com/users/517518356299907082'><FaDiscord className='mouse_ico' /></a>
                                <p className='ico_p'>Discord</p>
                            </div>
                            <div className='ico_p_wrapper'><a className='specials' href='https://twitter.com/wisdom_box'><AiFillTwitterCircle className='mouse_ico' /></a>
                                <p className='ico_p'>Twitter</p>
                            </div>
                            <div className='ico_p_wrapper'><a className='specials' href='https://www.facebook.com/vinceivan.pulido.7/'><AiFillFacebook className='mouse_ico' /> </a>
                                <p className='ico_p'>Facebook</p>
                            </div>
                            <div className='ico_p_wrapper'><a className='specials' href='https://github.com/WisdomString'><AiFillGithub className='mouse_ico' /> </a>
                                <p className='ico_p'>Or see my Github</p>
                            </div>
                        </div>
                        <div className='card-header'>
                            Special Thanks to
                        </div>
                        <p className='card_content_p'>Three.js Community <a className='specials' href='https://discord.com/invite/HF4UdyF'><strong>Discord</strong></a></p>
                        <p className='card_content_p'>Engr. Ramos for helping me with some questions about this project</p>
                        <p className='card_content_p'>Some of my friends despite they did nothing to help</p>
                        <p className='card_content_p'>And fireship.io, you should check out their <a className='specials' href='https://fireship.io'><strong>website</strong></a> and <a className='specials' href='https://www.youtube.com/c/Fireship'><strong>youtube channel</strong></a></p>
                    </div >
                </Html>
            </animated.group>
        </group>
    )
}

useGLTF.preload(filePathL)