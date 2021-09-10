import React, { useState,useEffect,useCallback } from 'react'
import { useStyles } from './RequestBlock.style'
import PrimaryButton from 'src/components/login/PrimaryButton';
import clsx from 'clsx';
import api from 'src/helpers/sendsay';
import { useConsoleContext } from 'src/context/ConsoleContext';
import spinner from '../../../icons/Spinner2.svg'
import dots from '../../../icons/dots.svg'
import format from '../../../icons/format.svg'

function RequestBlock() {

    const styles = useStyles()
    const [isError,setIsError] = useState(false)
    const [isServerError,setIsServerError] = useState(false)
    const [responseValue,setResponseValue] = useState("")
    const {addRequest, requestInputValue, setRequestInputValue, needSubmit, setNeedSubmit} = useConsoleContext()

    const onSubmit = useCallback(
         () => {
            setIsServerError(false)
            try {
                const request = JSON.parse(requestInputValue)       
                api.sendsay.request(request)
                    .then((res)=> {
                        addRequest({request:{...request}, response: {...res}, success: true})
                        setResponseValue(JSON.stringify(res,null,'\t'))})
                    .catch((err)=>{ 
                        addRequest({request:{...request}, response: {...err}, success: false})
                        setIsServerError(true)
                        setResponseValue(JSON.stringify(err,null,'\t'))});
            } catch (error) {
                setResponseValue('')
                setIsError(true)
            }     
        },
        [requestInputValue,addRequest],
    )

    useEffect(() => {
        if(needSubmit){
            onSubmit()
            setNeedSubmit(false)
        }
    }, [needSubmit,onSubmit,setNeedSubmit])

    const onTextareaChange = (e) => {
        isError && setIsError(false)
        setRequestInputValue(e.target.value) 
    }

    const onFormatingClick = () => {
        try {     
            setRequestInputValue(JSON.stringify(JSON.parse(requestInputValue),null,'\t'))
        } catch (error) {
            setIsError(true)
        } 
    }
    
    return (      
        <div className={styles.wrap} >
            <div className={styles.root}>
            <div className={styles.blockWrap} >
                <span className={clsx(styles.span, isError && styles.error)}>Запрос:</span>
                <div className={clsx(styles.reqresBlock, isError && styles.errorBlock) }>        
                        <textarea   name="requestInput" 
                                    id="requestInput" 
                                    value={requestInputValue}
                                    type="text" 
                                    onChange={onTextareaChange}/>                    
                </div>
            </div>
            <div className={styles.imgWrap}><img src={dots} alt="dots" /></div>
            <div className={styles.blockWrap}>
                <span className={clsx(styles.span, isServerError && styles.error)}>Ответ:</span>
                <div className={clsx(styles.reqresBlock, isServerError && styles.errorBlock) }>
                    <pre>
                        {responseValue}
                    </pre>
                </div>
            </div>
            </div>
            
            <div className={styles.submitBlock}>
                <PrimaryButton type="submit" onClick={onSubmit}>
                { false ? <img alt='loading' src={spinner}/>:'Отправить'}
                </PrimaryButton>
                <div>
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/Sa6aTeur">@github.com/Sa6aTeur</a>
                </div>
                <div className={styles.formatingBlock} onClick={onFormatingClick}>
                    <img src={format} alt="format" />
                    <span>Форматировать</span>
                </div>
            </div>     
        </div>
        
    )
}

export default RequestBlock
