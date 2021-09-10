import React from 'react'
import Item from './Item'
import { useConsoleContext } from '../../../context/ConsoleContext'
import { useStyles } from './RequestList.style'

function Test() {
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
            <div className={styles.cross} onClick={deleteHistory}>  
                <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--cross-color)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L19 19" stroke="var(--cross-color)" stroke-width="2" stroke-linecap="round"/>
                    <path d="M19 1L1 19" stroke="var(--cross-color)" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>        
        </div>
    )
}

export default Test
