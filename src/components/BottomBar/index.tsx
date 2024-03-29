import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaBloggerB } from 'react-icons/fa';
import DefaultOneCol from '@/components/DefaultOneCol';
import Link from '@/components/Link';
import styles from './index.module.css';

const BottomBar: React.FC = () => (
    <footer className={styles.bottomBar}>
        <DefaultOneCol>
            <ul className={styles.ul}>
                <li>
                    <Link href="https://www.linkedin.com/in/fernando-a-lopez-p/">
                        <FaLinkedin />
                        <span className={styles.name}>LinkedIn</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.github.com/sgenius">
                        <FaGithub />
                        <span className={styles.name}>Github</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/sgenius">
                        <FaTwitter />
                        <span className={styles.name}>Twitter</span>
                    </Link>
                </li>
                <li>
                    <Link href="http://mapasmapas.blogspot.com/">
                        <FaBloggerB />
                        <span className={styles.name}>My old map blog</span>
                    </Link>
                </li>
            </ul>
            <p className={styles.p}>&copy; 2023 Fernando Augusto L&oacute;pez Plascencia.</p>
        </DefaultOneCol>
    </footer>
);

export default BottomBar;