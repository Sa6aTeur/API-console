import React from 'react'
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        padding: '5px 5px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
}))

function Cross(props) {
    const styles = useStyles()

    return (
        <div className={styles.root} {...props}>  
                <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--cross-color)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L19 19" stroke="var(--cross-color)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 1L1 19" stroke="var(--cross-color)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div> 
    )
}

export default Cross
