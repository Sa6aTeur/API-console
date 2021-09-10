import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    }
}))

function ItemButton(props) {
    const styles = useStyles()

    return (
        <div className={styles.root} >
            <button {...props} >{props.name}</button>
        </div> 
    )
}

export default ItemButton
