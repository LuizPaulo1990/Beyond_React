import { Link } from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <img src={logo} alt='Beyound' />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/project'>Projects</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/company'>Company</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contact'>Contact</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;