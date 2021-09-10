import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    rel: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        padding: '3px 5px',
        background: '#fff',
        borderRadius: '5px',
        marginRight: '5px',
    },
    dotsWrap:{
        display: 'flex',
        position: 'relative',
        padding: '0 0 0 5px',
        "&:hover": {
            cursor: 'pointer', 
        },
    }, 
    imgWrap:{
        marginRight: '7px',
    },
    dropdown: {
        position: 'fixed',
        display: 'none',
        top: '0',
        left:'0',
        zIndex: '10', 
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    },
    dropdownButton:{
        width: '90px',
        height: '30px',
        borderRadius: '0',
        border: 'none',
        background: '#fff',
    },
    buttonWrapper:{
        borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    },
    blueButton: {
        "&:hover": {
            background: '#0055FB',
            color: '#fff', 
        },
    },
    redButton: {
        "&:hover": {
            background: '#CF2C00',
            color: '#fff', 
        },
    }

    
})
)