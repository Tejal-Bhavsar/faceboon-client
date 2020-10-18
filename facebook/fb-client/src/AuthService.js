
import axios from 'axios';

const API_URL = "http://localhost:3001";

class AuthService   {
     login(email,password){
         return  axios({
            method: 'post',
            url:  `${API_URL}/login`,
            data: {
                email: email,
                password: password
              },
            headers: {'Content-Type': 'application/json'}
          });
         
     }

     logout(){
         localStorage.removeItem("user");
     }

     resgister(username,email,password){
        console.log(username, email, password)
        return  axios({
            method: 'post',
            url:  `${API_URL}/signup`,
            data: {
              username: username,
              email: email,
              password: password
            },
            headers: {'Content-Type': 'application/json'}
          });
     }

     getCurrentUser(){
         return JSON.parse(localStorage.getItem('user'));
     }

}
export default new  AuthService();