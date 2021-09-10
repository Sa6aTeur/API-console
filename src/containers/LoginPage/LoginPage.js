import React, {useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import {LoginContainer} from 'src/components/login/LoginContainer';
import LoginForm from 'src/components/login/LoginForm';
import Input from 'src/components/login/Input';
import PrimaryButton from 'src/components/login/PrimaryButton';
import { useForm } from 'react-hook-form';
import { LoginApi } from './LoginPage.api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginContext } from 'src/context/LoginContext';
import ErrorBlock from 'src/components/login/ErrorBlock/ErrorBlock';
import { loginFormValidateSchema } from './loginPageValidateSchema';
import { useStyles } from './LoginPage.styles';
import spinner from '../../icons/Spinner2.svg'

function LoginPage({history}) {
  
  const [loginError, setLoginError] = useState({})
  const {loginData, setLoginData , login} = useLoginContext()
  const {loading, sessionKey} = loginData
  const styles = useStyles()
  const isLoggedIn = !!sessionKey?.length;
  const isError = !!loginError.id

  useEffect(() => {
    if (isLoggedIn) {   
      history.push('/console');
    }
  }, [history, isLoggedIn]);

  function onSubmit(data) {
    setLoginData({loading:true})
    LoginApi.authenticate(data).then((res) => {  
      login({
         login: data.login,
         sublogin: data.sublogin,})
      setLoginData({loading:false})
    }) 
    .catch((err) => {
      document.cookie = '';  
      setLoginData({loading:false}) 
      setLoginError(err)
    })
  }

  ///reactHookForm logic
  const {register,handleSubmit,formState: {errors}} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginFormValidateSchema)
  })

  if(isLoggedIn){
    return <></>
  }

  return (
    <LoginContainer>
      <img src="/icons/logo.svg" alt="" className={styles.logo} />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.headerText}>API-консолька</h1>
        {isError && <ErrorBlock title="Ошибка входа" message={loginError?.explain} />}
        <Input {...register("login")}  
            name="login" 
            id="login" 
            span="Логин"
            type="text" 
            iserror={errors?.login} 
            errormessage={errors?.login?.message} />
        <Input {...register("sublogin")}  
            name="sublogin" 
            id="sublogin" 
            span="Сублогин"
            type="text" 
            iserror={errors?.sublogin} 
            errormessage={errors?.sublogin?.message} />
        <Input {...register("password")}  
            name="password" 
            id="password" 
            span="Пароль"
            type="text" 
            iserror={errors?.password} 
            errormessage={errors?.password?.message} />
        
        <PrimaryButton type="submit">
        { loading ? <img alt='loading' src={spinner}/>:'Войти'}
        </PrimaryButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default withRouter(LoginPage);
