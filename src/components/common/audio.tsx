import React, { 
    useState,
    useEffect ,
} from 'react'

interface Props {
    src: string,

}

function MyAudio({
    src
}: Props) {
    const audio = new Audio(src)

    useEffect(() => {
        audio.play()
        return () => {
            audio.pause()
        } 
    }, [audio])    

    function playMusic() {
        audio.play()
    }

    function pauseMusic() {
        audio.pause()
    }
    return (
        <div className="audio">
            <div onClick={playMusic}>播放</div>
            <div onClick={pauseMusic}>暂停</div>
        </div>
    )
}

export default MyAudio