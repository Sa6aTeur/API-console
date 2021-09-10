import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    wrap:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
        height: '100%',
    },
    root:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff',
        padding: '10px 15px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        height: '100%',
    },
    imgWrap:{
        height: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        
    },
    blockWrap:{
        display: 'flex',
        flexDirection: 'column',
        width: '49.7%',
        
    },
    reqresBlock:{
        border: '1px solid rgba(0, 0, 0, 0.2)',
        width: '100%',
        borderRadius: '5px',
        padding: '10px 10px',
        height: '100%',
        '& textarea': {
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'auto',
            outline: 'none',
            boxShadow: 'none',
            fontSize: '14px',
        },
        '& pre': {
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'auto',
            outline: 'none',
            boxShadow: 'none',
            fontSize: '14px',
        }
    },
    submitBlock:{
        padding: '10px 15px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        '& a': {
            textDecoration: 'none',
            color: '#999999',
        }
    },
    formatingBlock:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
            fontSize: '14px',
            marginLeft: '5px',
        },
        "&:hover": {
            cursor: 'pointer',
            "& img": {
                transform: 'translateY(-2px)  translateX(2px)',
                transition: ' 0.3s '
            },  
        },
    },
    span: {
        color: '#999999',
        fontSize: '14px',
    },
    errorBlock:{
        border: '1px solid red'
    },
    error:{
        color: 'red'
    },
    
}))