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
    copyWrap:{
        position: 'absolute',
        borderRadius: '5px',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-90%)',
        zIndex: '5',
        pading: '2px 2px',
        background: 'rgba(246, 246, 246, 1)'
    },
    copySpan:{
       fontSize: '10px',
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