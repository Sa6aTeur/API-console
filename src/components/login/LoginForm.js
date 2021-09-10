import React from 'react'

import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        width: '520px',
        display: 'flex',
        flexDirection: 'column',
        left: 'calc(50% - 520px / 2)',
        background: '#ffffff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        padding: '30px 30px',
    }
}))
function LoginForm({children, ...props}) {

    const styles = useStyles()

    return <form className={styles.root} {...props}> {children} </form>  
}

export default LoginForm
