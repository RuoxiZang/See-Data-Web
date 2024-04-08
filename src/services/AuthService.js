// 导入 axios
import axios from 'axios';

const authUser = axios.create({
    baseURL: 'http://127.0.0.1:5000/auth',
    //baseURL: 'http://localhost:8080/auth',
    withCredentials: true, // 允许发送会话 Cookie
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded', // 表单类型
    },
})

export default{
    getRegisterData(formData){
        //console.log('here');
        //return authUser.post('/register')
        return authUser.post('/register',formData)
    },
    getLoginData(formData){
        return authUser.post('/login',formData)
        //return authUser.post('/login')
    },
    getUsername(){
        return authUser.get('/modeltest')
        .then(response => {
          if (response.data && response.data.username) {
            return response.data.username;
          }
          return null;
        })
        .catch(error => {
          console.error(error);
          return null;
        });
    }
}