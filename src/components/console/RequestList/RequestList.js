import React from 'react'
import Item from './Item'
import { useConsoleContext } from '../../../context/ConsoleContext'
import { useStyles } from './RequestList.style'
import Cross from 'src/components/ui/Cross'

function RequestList() {
    const styles = useStyles()
    const {consoleData,deleteHistory} = useConsoleContext()
    const {requests} = consoleData

    return (
        <div className={styles.root} >
            <div id='scroll' className={styles.content}>                   
                {requests.map(request => {
                    return <Item {...request} key={Math.random()}/>
                })}     
            </div>
            <div className={styles.gradient}>                     
            </div>
            <Cross onClick={deleteHistory} />       
        </div>
    )
}

export default RequestList
