import React from 'react';
import styles from './index.module.css';

import NextLink from 'next/link';

// LinkProps won't work properly
export const Link: React.FC<any> = (props: any) => (
    <NextLink className={styles.link} {...props} />
);

export default Link;