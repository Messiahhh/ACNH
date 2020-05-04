import React, { 
    useState,
    useEffect ,
} from 'react'
import {
    Button,
} from 'antd'
import {
    PlayCircleOutlined,
    PauseOutlined,
} from '@ant-design/icons'

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

    function conversion (value: number) {
        let minute: string | number = Math.floor(value / 60)
        minute = minute.toString().length === 1 ? ('0' + minute) : minute
        let second: string | number = Math.round(value % 60)
        second = second.toString().length === 1 ? ('0' + second) : second
        return `${minute}:${second}`
    }


    function playMusic() {
        audio.play()
    }

    function pauseMusic() {
        audio.pause()
    }
    return (
        <div className="audio">
            <Progress audio={audio}></Progress>
            <Button onClick={playMusic} size="large" icon={<PlayCircleOutlined />}></Button>
            <Button onClick={pauseMusic} size="large" icon={<PauseOutlined />}></Button>
        </div>
    )
}


interface ProgressProps {
    audio: any, 
}
function Progress({
    audio
}: ProgressProps) {
    const [ percent, setPercent ] = useState('0%')
    useEffect(() => {
        let timer = setInterval(() => {
            setPercent((audio.currentTime / audio.duration * 100).toFixed(1) + '%')
        },)
        return () => {
            clearInterval(timer)
        }
    })

    function jump (e: any) {
        const start = e.target.getBoundingClientRect().left
        const end = e.pageX
        const p = (end - start) / e.target.offsetWidth
        setPercent((p * 100).toFixed(1) + '%')
        audio.currentTime = p * audio.duration
        audio.play()
    }
    return (
        <div className="progress" onClick={jump}>
            <div className="bar" style={{ width: percent}}></div>
        </div>
    )
}

export default MyAudio