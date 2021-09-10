import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '110px',
        height: '40px',
        color: '#ffffff',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
        borderRadius: '5px',
        border: 'none', 
        '&:hover': {
            background: "linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;",
         },
         '&:active': {
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;",
         },
        
    }
}))
function PrimaryButton({children, ...props}) {
    const styles = useStyles()
    
    return (
        <button type="submit" className={styles.root} {...props} >
           {children}
        </button>
    )
}

export default PrimaryButton
