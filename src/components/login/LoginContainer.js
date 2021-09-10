import React from 'react'
import {Container, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
    root:{
        height: '100%',
        width: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
}))

export const LoginContainer = ({children, ...props}) => {
    const styles = useStyles()

    return (
        <Container container='main' maxWidth="md" className={styles.root} {...props}>
            {children}
        </Container>
    )
}


