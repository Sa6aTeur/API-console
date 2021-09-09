import { makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgba(207, 44, 0, 0.1)',
        borderRadius: '5px',
        padding: '10px 10px',
        marginBottom: '10px',
    },
    wrap:{
        display: 'flex',
        alignItems: 'flex-start'
    },
    titleWrap:{
        padding: '0 10px'
    },
    span: {
        padding: '0',
        color: '#CF2C00',
        fontSize: '12px',
        margin: '0',
    },
    title: {
        padding: '0',
        margin: '0',
        color: '#CF2C00',
        fontSize: '18px'
    }
}))