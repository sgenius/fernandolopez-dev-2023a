import React from 'react';
import styles from './index.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const DefaultOneCol: React.FC<Props> = (props) => (
    <section className={`${props.className || ''} ${styles.wrapper}`}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    {props.children}
                </div>
            </div>
        </div>
    </section>
);

export default DefaultOneCol;