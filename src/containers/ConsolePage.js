import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from 'src/components/console/Header/Header'
import RequestBlock from 'src/components/console/RequestBlock/RequestBlock'
import RequestList from 'src/components/console/RequestList/RequestList'

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    }
}))

function ConsolePage() {
    const styles = useStyles()
    
    return (
        <div className={styles.root}>
            <Header />
            <RequestList/>
            <RequestBlock/>
        </div>
    )
}

export default ConsolePage
