import React, { useCallback } from 'react'
import Item from './Item'
import { useConsoleContext } from '../../../context/ConsoleContext'
import { useStyles } from './RequestList.style'
import Cross from 'src/components/ui/Cross'

function RequestList() {
    const styles = useStyles()
    const {consoleData,deleteHistory} = useConsoleContext()
    const {requests} = consoleData
    
    const memoizedRequests =useCallback(
        requests.map(request => {
            return <Item {...request} key={Math.random()}/>
        }),
        [requests],
    )

    return (
        <div className={styles.root} >
            <div id='scroll' className={styles.content}>                   
                {memoizedRequests}     
            </div>
            <div className={styles.gradient}>                     
            </div>
            <Cross onClick={deleteHistory} />       
        </div>
    )
}

export default RequestList
