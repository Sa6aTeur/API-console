import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '5px 0 5px 15px',
        alignItems: 'center',
        position: 'relative',   
    }  ,     
    content: {
        width: '100%',
        height: '25px',
        overflow: 'scroll',
        overflowY: 'hidden',
        display: 'flex',
        position: 'relative',
        '&::-webkit-scrollbar': {
            display: 'none'
          },  
    } ,  
    gradient: {
        height: '40px',
        width: '10px',
        top: '0',
        right: '30px',
        position: 'absolute',
        background: 'linear-gradient(269.93deg, #F6F6F6 0.16%, rgba(246, 246, 246, 0.1) 99.93%)',
    },
    cross:{
        display: 'flex',
        padding: '5px 5px',
    },
}))