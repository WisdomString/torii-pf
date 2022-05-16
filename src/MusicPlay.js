import React, { useState } from 'react'
import Riviere from './music/Riviere.mp3'
import { Howl } from 'howler';

export default function MusicPlay() {
    const [music, setmusic] = useState(false)
    const sound = new Howl({
        src: [Riviere],
        loop: true,
        volume: 0.5,
    });
    const handleClick = () => sound.play();

    return (
        <>
            <span
                onClick={(event => setmusic(!music))}>
                <p style={{ display: music ? 'none' : 'fixed', margin: '0', cursor: 'default', color: 'white' }} onClick={handleClick}>want to play music?⭕</p>
            </span>
        </>)
}