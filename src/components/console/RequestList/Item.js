import { useStyles } from './Item.style'
import { useConsoleContext } from 'src/context/ConsoleContext'
import React from 'react'
import clsx from 'clsx'
import { useScrollWithDropdown } from './useScrollWithDropdown'
import dots from '../../../icons/dots.svg'
import green from '../../../icons/EllipseGreen.svg'
import red from '../../../icons/EllipseRed.svg'

function Item({name, success, customref, onDelete}) {
    const {deleteRequest, copyRequest, doRequest} = useConsoleContext()
    const styles = useStyles()
    const [buttonRef, ulRef] = useScrollWithDropdown();

    return (
        <div  className={styles.rel} >
            <div className={styles.imgWrap}>
                {success ? <img src={green} alt="green" />: <img src={red} alt="red" />}
            </div>
            <span>{name}</span>
            <div ref={buttonRef} className={styles.dotsWrap}>
                <img src={dots} alt="dots" />
                <ul ref={ulRef} 
                    className={styles.dropdown}>
                    <div className={styles.buttonWrapper} >
                        <button onClick={()=>doRequest(name)} className={clsx(styles.dropdownButton,styles.blueButton)}>Выполнить</button>
                    </div>  
                    <div className={styles.buttonWrapper} >
                        <button onClick={()=>copyRequest(name)} className={clsx(styles.dropdownButton,styles.blueButton)}>Скопировать</button>
                    </div> 
                    <div className={styles.buttonWrapper} >
                        <button onClick={()=>deleteRequest(name)} className={clsx(styles.dropdownButton,styles.redButton)}>Удалить</button>
                    </div>   
                </ul> 
            </div>    
        </div> 
    )
}

export default Item
