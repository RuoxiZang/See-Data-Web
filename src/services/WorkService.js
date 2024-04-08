// 导入 axios
import axios from 'axios';

const workUser = axios.create({
    baseURL: 'http://127.0.0.1:5000/workplace',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json', // json类型
    },
    withCredentials: true, // 允许发送会话 Cookie
})

export default{
    fetchData(templateName) {
        return workUser.get(`/${templateName}`)
        .then(response => {
          if (response.data) {
            console.log(response.data);
            if (response.data.message !== 'new template') {
              return response.data;
            }
          }
          return null;
        })
          .catch(error => {
            console.error(error);
            return null;
          });
      },
    
      sendData(templateData,name){
        console.log('senddata');
       
        return workUser.post(`/${name}`,templateData)
      }
}
