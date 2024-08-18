import { Header } from '../../../widgets/Header';
import { LeftSide } from '../../../widgets/LeftSide';
import { ProfileForm } from '../../../widgets/ProfileForm';
import { RightSide } from '../../../widgets/RightSide';
import styles from './styles.module.scss'


function Profile () {
    return <div className={styles.Profile}>
        <Header />
        <ProfileForm />
    </div>;
}

export default Profile ;