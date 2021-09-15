import React, { forwardRef } from 'react'
import { makeStyles} from '@material-ui/core'
import { Input as Input1} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root:{
        width: '460px',
        height: '40px',
        overflow: 'hidden',
        left: 'calc(50% - 460px/2)',
        marginBottom: '25px',
        display: 'flex',
        background: '#FFFFFF',
        paddingLeft: '7px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
    },
    span:{
        display: 'flex',
        marginBottom: '5px',
        fontSize:'16px',
    },
    error:{
        border: '1px solid red'
    },
    spanerror:{
        color: 'red'
    },
    password:{
        fontSize: '75px',
        paddingTop: '5px',
    }

}))

const Input = forwardRef((props,ref) => {
    const styles = useStyles()

    return (
        <>
            <span className={clsx(styles.span, props.iserror && styles.spanerror)}>{props.span}</span>
            <Input1 {...props} className={clsx(styles.root, props.iserror && styles.error, props.className,
                props.type ==='password' && styles.password )} disableUnderline ref={ref}{...props}/>
        </>
    )
})

export default Input
