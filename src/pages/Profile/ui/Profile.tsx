import { Header } from '../../../widgets/Header';
import { ProfileForm } from '../../../widgets/ProfileForm';
import styles from './styles.module.scss'


function Profile () {
    return <div className={styles.Profile}>
        <Header />
        <ProfileForm />
    </div>;
}

export default Profile ;