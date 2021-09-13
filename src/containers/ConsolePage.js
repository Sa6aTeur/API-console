import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core'
import { useLoginContext } from 'src/context/LoginContext';
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
    const history = useHistory()
    const {loginData} = useLoginContext()
    const {sessionKey} = loginData
    const isLoggedIn = !!sessionKey?.length;

    useEffect(() => {
        if (!isLoggedIn) {   
          history.push('/');
        }
    }, [history, isLoggedIn]);

    if(!isLoggedIn){
        return <></>
    }

    return (
        <div className={styles.root}>
            <Header />
            <RequestList/>
            <RequestBlock/>
        </div>
    )
}

export default ConsolePage
