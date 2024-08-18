import { Header } from '../../../widgets/Header';
import { LeftSide } from '../../../widgets/LeftSide';
import { RightSide } from '../../../widgets/RightSide';
import styles from './styles.module.scss'


function MainPage () {
    return <div className={styles.MainPage}>
        <Header />
        <LeftSide />
        <RightSide />
    </div>;
}

export default MainPage ;