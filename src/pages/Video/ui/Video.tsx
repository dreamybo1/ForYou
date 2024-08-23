import ReactPlayer from 'react-player';
import { Header } from '../../../widgets/Header';
import { LeftSide } from '../../../widgets/LeftSide';
import { ProfileForm } from '../../../widgets/ProfileForm';
import { RightSide } from '../../../widgets/RightSide';
import styles from './styles.module.scss'
import videoFile from "../../../shared/assets/video/2023-07-06 19.02.24.mp4"
import PlayButton from '../../../shared/assets/play2-svgrepo-com.svg?react'
import { useEffect, useRef, useState } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
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