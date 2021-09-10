import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px 15px',
        background: '#E5E5E5',
        "& h3": {
            fontWeight: '400',
        },
        "& div": {
            display: 'flex',
            alignItems: 'center',
        }
    },
    logo:{
        marginRight: '15px',
    },
    loginBlock:{
        display:'flex',
        marginRight: '30px',
        alignItems: 'center',
        padding: '5px 10px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
    },
    cancelBlock:{
        display:'flex',
        alignItems: 'center',
        marginRight: '30px',
        "& span": {
            marginRight: '7px',
        },
        "&:hover": {
            cursor: 'pointer',
            "& img": {
                transform: 'translateY(-2px)  translateX(2px)',
                transition: ' 0.3s '
            },  
        },
    },
    fullscreen:{
        minWidth: '20px',
        minHeight: '20px',
        "&:hover": {
            cursor: 'pointer',
            "& img": {
                width: '20px',
                height: '20px',
                transition: ' 0.15s '
            },  
        },
    },
    canselFullscreen:{
        minWidth: '20px',
        minHeight: '20px',
        "&:hover": {
            cursor: 'pointer',
            "& img": {
                width: '18px',
                height: '18px',
                transition: ' 0.15s '
            },  
        },
    },
}))