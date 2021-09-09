import React from 'react'
import Item from './Item'
import { useConsoleContext } from '../../../context/ConsoleContext'
import { useStyles } from './RequestList.style'
import cross from '../../../icons/cross.svg'

function Test() {

    const styles = useStyles()
    const {consoleData,deleteHistory} = useConsoleContext()
    const {requests} = consoleData

    return (
        <div className={styles.root} >
                <div id='scroll' className={styles.content}>
                    
                    {requests.map(r => {
                        return <Item {...r} key={Math.random()}/>
                    })}
                    
                </div>
                <div className={styles.gradient}>                     
                </div>
                <div className={styles.cross} onClick={deleteHistory}>  
                    <img src={cross} alt="delete" />
                </div>
            
        </div>
    )
}

export default Test
