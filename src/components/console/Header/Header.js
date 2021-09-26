
import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { useLoginContext } from 'src/context/LoginContext'
import {useStyles} from './Header.style'
import logoutIcon from '../../../icons/log-out.svg'
import cancelFulScr from '../../../icons/cancelFulScr.svg'
import fullScr from '../../../icons/full-screen.svg'
import Logo from 'src/components/ui/Logo'
import Texts from 'src/textConstants'

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
                <Logo/>
                <h3>{Texts.LOGO_TITLE}</h3>
            </div>

            <div>
                <div className={styles.loginBlock}>
                    <span>{login}</span> {sublogin && <span> : {sublogin}</span>}
                </div>
                
                <div className={styles.cancelBlock} onClick={cancelClick}>
                    <span>{Texts.LOGOUT_BUTTON}</span>
                    <img height={22} width={22} className={styles.cancel} src={logoutIcon} alt="logout" /> 
                </div>

                {fullscreen 
                    ?<div className={styles.cancelFullscreen} onClick={onCancelFullScreenClick}>
                        <img src={cancelFulScr} alt="fullscreeen" /> 
                    </div>  
                    :<div className={styles.fullscreen} onClick={onFullScreenClick}>
                        <img src={fullScr} alt="fullscreeen" /> 
                    </div>}
            </div>
        </div>
    )
}

export default Header
