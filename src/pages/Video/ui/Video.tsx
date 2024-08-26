import ReactPlayer from 'react-player';
import { Header } from '../../../widgets/Header';
import styles from './styles.module.scss'
import videoFile from "../../../shared/assets/video/avc_video.mp4"
import PlayButton from '../../../shared/assets/play2-svgrepo-com.svg?react'
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../../shared/hooks/width';

function Video () {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isMoving, setIsMoving] = useState<boolean>(false)
    const timer = useRef<any>()

    useEffect(()=>{
        document.addEventListener("mousemove", ()=>{
            if(!isMoving) {
                clearTimeout(timer.current)
                setIsMoving(true)
                timer.current = setTimeout(()=>{
                    setIsMoving(false)
                }, 1000)
            }
        })
        return () => removeEventListener("mousemove", ()=>{
            if(!isMoving) {
                setIsMoving(true)
                setTimeout(()=>{
                    setIsMoving(false)
                }, 1000)
            }
        })
    }, [])
    const {width} = useWindowDimensions()  




    

    return <div className={styles.Video}>
        <Header />
        <ReactPlayer
            playing={isPlaying}
            width={'100%'}
            height={'100%'}
            controls
            onPause={()=>setIsPlaying(n=>!n)}
            url={videoFile}
        />
        {width<700 && !isPlaying && <PlayButton onClick={()=>{setIsPlaying(n=>!n)}} className='absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)] mx-0 h-[75px]'/>}
        {width>700 && !isPlaying && isMoving && <PlayButton onClick={()=>{setIsPlaying(n=>!n)}} className='absolute cursor-pointer top-[50%] left-[50%] [transform:translate(-50%,-50%)] mx-0 h-[75px]'/>}
    </div>;
}

export default Video ;