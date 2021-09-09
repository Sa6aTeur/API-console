
import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { useLoginContext } from 'src/context/LoginContext'
import {useStyles} from './Header.style'
import logo from '../../../icons/logo.svg'
import logoutIcon from '../../../icons/log-out.svg'
import cancelFulScr from '../../../icons/cancelFulScr.svg'
import fullScr from '../../../icons/full-screen.svg'

function Header() {

    const {loginData, logout} = useLoginContext()
    const {login,sublogin} = loginData
    const styles = useStyles()
    const history = useHistory()
    const [fullscreen, setFullscreen] = useState(false)

    const onFullScreenClick = () => {
        document.documentElement.requestFullscreen()
        setFullscreen(true)
    }
    const onCancelFullScreenClick = () => {
        document.exitFullscreen()
        setFullscreen(false)
    }

    const cancelClick = () => {
        logout()   
        history.push('/')
    }

    return (
        <div className={styles.root}>
            <div>
                <img className={styles.logo} src={logo} alt="logo" />
                <h3>API-консолька</h3>
            </div>

            <div>
                <div className={styles.loginBlock}>
                    <span>{login}</span> {sublogin && <span> : {sublogin}</span>}
                </div>
                
                <div className={styles.cancelBlock} onClick={cancelClick}>
                    <span>Выйти</span>
                    <img height={22} width={22} className={styles.cancel} src={logoutIcon} alt="logout" /> 
                </div>

                {fullscreen 
                    ? <div className={styles.canselFullscreen} onClick={onCancelFullScreenClick}>
                        <img height={20} width={20} className={styles.cancel} src={cancelFulScr} alt="fullscreeen" /> 
                      </div>
                    
                    :<div className={styles.fullscreen} onClick={onFullScreenClick}>
                        <img height={18} width={18} className={styles.cancel} src={fullScr} alt="fullscreeen" /> 
                    </div>}
            </div>
        </div>
    )
}

export default Header
