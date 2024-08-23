import { FC } from 'react';
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
import Maket from '../../../shared/assets/images/maket.jpg'
import Video from '../../../shared/assets/video/video_lovemusic.mp4'
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../../shared/hooks/width';

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
    return (
        <div className={styles.Info}>
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
                <div className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                    А ещё понял, что ты тащишься от музыки, прям как я и твоя мама :)<br /> 
                </div>
                <div className={styles.video}>
                    <ReactPlayer width={width> 700 ? "" : 250} controls url={Video}/>
                </div>
                <div className='font-racama w-[60%] md:w-[90%] text-black text-center'>
                    И так совпало, что в один момент у тебя сломались наушники... <br />
                    Уже тогда в моей голове начала зарождаться идея как мне сделать тебя чуточку счастливее ❤ <br />
                    Но я не решался это сделать сразу, потому что просто купить тебе какие-то наушники было бы достаточно банально и ни к чему не приурочено... <br />
                    Затем, я начинаю замечать твой неподдельный интерес к наушникам бренда <p className='font-marshall text-[28px]'>Marshall</p> <br />
                    И он постепенно нарастал... <br /><br />
                    Нарастал... <br /><br />
                    И 27.07.2024 ты мне рисылаешь свою первую полноценную работу
                </div>
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
            </div>
        </div>
    );
};
