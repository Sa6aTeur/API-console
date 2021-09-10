import React from 'react'
import { useStyles } from './ErrorBlock.style'

function ErrorBlock(props) {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <div className={styles.wrap}>
                <img alt='error' src="/icons/meh.svg" />
                <div className={styles.titleWrap}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <span className={styles.span}>{props.message}</span>
                </div>
            </div>
        </div>
    )
}

export default ErrorBlock
