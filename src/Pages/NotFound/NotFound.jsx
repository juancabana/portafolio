import React from 'react';
import styles from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
        <><section className={styles.page_404}>
            <div className={styles.container}>
                <div className={styles.four_zero_four_bg}>
                </div>
                <h1 className={styles.text}>404 | Page not found</h1>

                <NavLink to="/" className={styles.link_404}>Go to Home</NavLink>
            </div>
        </section>
        </>
    );
}

export default NotFoundPage;