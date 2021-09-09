import api from 'src/helpers/sendsay';

export const LoginApi = {
     authenticate(payload) {
       return api.sendsay
           .login({
             login: payload.login,
             sublogin: payload.sublogin,
             password: payload.password,
           })
        }
}