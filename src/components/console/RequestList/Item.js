import React, { useState } from 'react'
import { useStyles } from './Item.style'
import { useConsoleContext } from 'src/context/ConsoleContext'
import clsx from 'clsx'
import { useScrollWithDropdown } from './useScrollWithDropdown'
import dots from '../../../icons/dots.svg'
import green from '../../../icons/EllipseGreen.svg'
import red from '../../../icons/EllipseRed.svg'
import ItemButton from './ItemButton'
import Texts from 'src/textConstants'

function Item({name, success, customref, onDelete}) {
    const {deleteRequest, copyRequest, doRequest} = useConsoleContext()
    const styles = useStyles()
    const [buttonRef, ulRef] = useScrollWithDropdown();
    const [isVisibleCopied, setisVisibleCopied] = useState(false)

    const onCopyButtonClick = () =>{
        copyRequest(name)
        setisVisibleCopied(true)
        setInterval(()=>setisVisibleCopied(false), 1000)
    }

    return (
        <div className={styles.rel} >
            <div className={styles.imgWrap}>
                {success 
                    ?<img src={green} alt="green" />
                    :<img src={red} alt="red" />}
            </div>
            {isVisibleCopied && <div className={styles.copyWrap}><span className={styles.copySpan}>{Texts.COPIED_TEXT}</span></div>}
            <span>{name}</span>
            <div ref={buttonRef} className={styles.dotsWrap}>
                <img src={dots} alt="dots" />
                <ul ref={ulRef} className={styles.dropdown}>
                    <ItemButton name={Texts.DO_REQUEST} onClick={()=>doRequest(name)} className={clsx(styles.dropdownButton,styles.blueButton)} />
                    <ItemButton name={Texts.COPY} onClick={onCopyButtonClick} className={clsx(styles.dropdownButton,styles.blueButton)}/>
                    <ItemButton name={Texts.DELETE} onClick={()=>deleteRequest(name)} className={clsx(styles.dropdownButton,styles.redButton)}/>  
                </ul> 
            </div>    
        </div> 
    )
}

export default Item
