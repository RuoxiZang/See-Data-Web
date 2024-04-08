// 导入 axios
import axios from 'axios';

const modelUser = axios.create({
    baseURL: 'http://127.0.0.1:5000/model',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json', // json类型
    },
    withCredentials: true, // 允许发送会话 Cookie
})

export default{
    getUsername(){
      return modelUser.get('/')
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
  },
    getmyModel(){
        return modelUser.get('/mymodel')
        .then(response =>{
          // 从响应中获取模板数据
          if(response.data){
            return response.data;
            //console.log(response.data);
          }
          return null;
        })
        .catch(error => {
          console.error(error);
          return null;
        });
    }
   
}
