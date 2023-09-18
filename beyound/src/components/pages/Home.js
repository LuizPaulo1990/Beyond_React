import styles from './Home.module.css';
import saving from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return(
        <section className={styles.homeContainer}>
            <h1>Welcome to <span>Beyound</span></h1>
            <p>start managing you projects right now!</p>
            <LinkButton to='/newproject' text='Create Project'/>
            <img src={saving} alt='Beyound'></img>
        </section>
    )
}

export default Home;