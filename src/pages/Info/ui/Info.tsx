import { FC, useContext, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../../../widgets/Header';
import Image1 from '../../../shared/assets/images/photo_1.jpg'
import Image2 from '../../../shared/assets/images/photo_2.jpg'
import Image3 from '../../../shared/assets/images/photo_3.jpg'
import Image4 from '../../../shared/assets/images/photo_4.jpg'
import Image5 from '../../../shared/assets/images/photo_5.jpg'
import Image6 from '../../../shared/assets/images/photo_6.jpg'
import Image7 from '../../../shared/assets/images/photo_7.jpg'
import Image8 from '../../../shared/assets/images/photo_8.jpg'
import Image9 from '../../../shared/assets/images/photo_9.jpg'
import Image10 from '../../../shared/assets/images/photo_10.jpg'
import TurnOff from '../../../shared/assets/mute-svgrepo-com.svg?react'
import Maket from '../../../shared/assets/images/maket.jpg'
import Video from '../../../shared/assets/video/video_lovemusic.mp4'
import BGSound from '../../../shared/assets/audio/X2Download.app - [FREE] playboi carti x drake type beat - _life is a game_ (prod. level) (128 kbps).mp3'
import Start from '../../../shared/assets/audio/start_before_imgs.mp3'
import VideoVoice from '../../../shared/assets/audio/video_voice.mp3'
import ThirdPartVoice from '../../../shared/assets/audio/third_part.mp3'
import FourthPartVoice from '../../../shared/assets/audio/fourth_part.mp3'
import FifthPartVoice from '../../../shared/assets/audio/fifth_part.mp3'
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../../shared/hooks/width';
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';
import { TurnOnVideo } from '../../../shared/context';

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10
]
interface InfoProps {
    className?: string;
}

export const Info: FC<InfoProps> = () => {
    const {width} = useWindowDimensions()
    const {setOn} = useContext(TurnOnVideo)
    const [sound, setSound] = useState(true)
    const [, setLoadVideo] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [secondPart, setSecondPart] = useState(false) 
    const [thirdPart, setThirdPart] = useState(false) 
    const [thirdPartPlayed, setThirdPartPlayed] = useState(false) 
    const [fourthPart, setFourthPart] = useState(false) 
    const [fourthPartPlayed, setFourthPartPlayed] = useState(false) 
    const [fifthPart, setFifthPart] = useState(false) 
    const [fifthPartPlayed, setFifthPartPlayed] = useState(false) 
    const [play, {stop, pause, sound: loadedBg}] = useSound(BGSound, {volume: .1, soundEnabled:sound});
    const [playStart, {stop: stopStart, sound: loadedStart}] = useSound(Start, {volume: .5, soundEnabled:sound});
    const [playVideoVoice, {sound: loadedVideoVoice}] = useSound(VideoVoice, {volume: .5, soundEnabled:sound});
    const [playThirdPartVoice, {sound: loadedThirdPartVoice, duration:durationThirdPartVoice}] = useSound(ThirdPartVoice, {volume: .5, soundEnabled:sound});
    const [playFourthPartVoice, {duration:durationFourthPartVoice}] = useSound(FourthPartVoice, {volume: .5, soundEnabled:sound});
    const [playFifthPartVoice] = useSound(FifthPartVoice, {volume: .5, soundEnabled:sound});
    const ref = useRef()
    const {ref:videoRef, inView: inViewVideoVoice} = useInView({
        threshold: 0.9,
    })
    const {ref:thirdPartRef, inView: inViewThirdPart} = useInView({
        threshold: 0.9,
    })
    useEffect(()=>{
        if (loadedBg && loadedStart && ref.current) {
            play()
            setTimeout(()=>{
                playStart();            
            }, 4000)
        }
        return ()=> {stop(); stopStart()}
    }, [ref.current, loadedBg, loadedStart])

    useEffect(()=>{
        sound ? play() : stop()
    }, [sound])
    useEffect(()=> {
        console.log("in view");
        const timer = setTimeout(()=>{

            if(inViewVideoVoice && ref.current){
                setLoadVideo(true)
                setTimeout(()=>{
                    setShowVideo(true)
                }, 5000)
    
            }
        }, 2000)
        return () => clearTimeout(timer)
        
    }, [inViewVideoVoice, ref.current])

    useEffect(()=>{
        if(loadedVideoVoice && inViewVideoVoice && showVideo && !secondPart) {
            setSecondPart(true)
            playVideoVoice()
        }
    }, [showVideo, inViewVideoVoice, loadedVideoVoice])

    useEffect(()=> {
        setTimeout(()=>{

            if(inViewThirdPart && ref.current && thirdPart && loadedThirdPartVoice && !thirdPartPlayed){
                playThirdPartVoice()
                setThirdPartPlayed(true)
                setTimeout(()=>{
                    setFourthPart(true)
                    // @ts-ignore
                }, durationThirdPartVoice)
            }
        }, 1000)
    }, [inViewThirdPart])
    useEffect(()=> {
        if(fourthPart && !fourthPartPlayed) {
            setFourthPartPlayed(true)
            fourthPart && playFourthPartVoice()
            setTimeout(()=>{
                setFifthPart(true)
                    // @ts-ignore
            }, durationFourthPartVoice)
        }
    }, [fourthPart])
    useEffect(()=> {
        if(fifthPart && !fifthPartPlayed) {
            setFifthPartPlayed(true)
            fifthPart && playFifthPartVoice()
            setOn(true)
        }
    }, [fifthPart])
    return ( 
        // @ts-ignore
        <div ref={ref} className={styles.Info}>
            <TurnOff onClick={()=> {setSound(n=>!n);}} className={`${sound ? "opacity-[100%]" : 'opacity-[50%]'} fixed cursor-pointer h-[50px] right-0 bottom-0 z-[1] m-5`} />
            <Header />
            <div className='p-20 md:p-5 flex gap-[10px] flex-col items-center justify-center w-full'>
                <h1 className='font-racama text-black text-[48px] text-center md:text-[40px]'>INFORMATION</h1>
                <div className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                    Знаешь, мы с тобой уже почти 2 года вместе. И за это время я понял для себя много вещей касаемо тебя.
                    Например, ты любишь носить темные вещи) <br /> 
                </div>
                <div className='flex px-20 grid grid-cols-2 my-20 md:grid-cols-1 md:px-5 gap-5'>
                    {images.map(el=>(
                        <div className={styles.iamgeContainer}>
                            <img src={el} className='object-cover w-full h-full rounded-lg hover:mix-blend-luminosity active:mix-blend-luminosity transition-all' alt="" />
                        </div>
                    ))}
                </div>
                <h1 ref={videoRef}>💝</h1>
                {showVideo && <>
                    <div  className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                        А ещё понял, что ты тащишься от музыки, прям как я и твоя мама :)<br />
                    </div>
                    <div className={styles.video}>
                        <ReactPlayer onPlay={()=>{sound && pause()}} onStart={()=>{sound && pause()}} onPause={()=>{sound && play()}} onEnded={()=>{setThirdPart(true)}} width={width> 700 ? "" : 250} controls url={Video}/>
                    </div>
                </>}
                {thirdPart && <>
                    <div ref={thirdPartRef} className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                        И так совпало, что в один момент у тебя сломались наушники... <br />
                        Уже тогда в моей голове начала зарождаться идея как мне сделать тебя чуточку счастливее ❤ <br />
                        Но я не решался это сделать сразу, потому что просто купить тебе какие-то наушники было бы достаточно банально и ни к чему не приурочено... <br />
                        Затем, я начинаю замечать твой неподдельный интерес к наушникам бренда <p className='font-marshall text-[28px]'>Marshall</p> <br />
                    </div>
                </>}
                {fourthPart &&<div className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                    И он постепенно нарастал... <br /><br />
                    Нарастал... <br /><br />
                </div>}
                {fifthPart && <>
                    <div className='font-racama w-[60%] md:w-[90%] text-black text-center'>И 27.07.2024 ты мне присылаешь свою первую полноценную работу</div>
                    <div className={styles.iamgeContainer}>
                        <img src={Maket} alt="" />
                    </div>
                    <div className='font-marshall w-[60%] md:w-[90%] text-black text-center text-[30px]'>
                        By Artyukhova.<br />
                    </div>
                    <div className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                        Во-первых, в этот день я еще раз убедился, что ты очень творческий человечек сколько бы ты не твердила мне обратное! <br />
                        Во-вторых, для меня все стало на свои места и я точно понял, как сделать тебя счастливее и что для этого нужно!<br />
                    </div>
                </>}
                
            </div>
        </div>
    );
};
