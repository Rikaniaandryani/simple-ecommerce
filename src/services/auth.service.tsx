import axios from "axios"
import { jwtDecode } from "jwt-decode";

interface Params {
    username: string;
    password: string;
}
export const loginService = (data: Params, callback: any) => {
    axios.post('https://fakestoreapi.com/auth/login', data).then((res) => {
        callback(true, res.data.token)
    }).catch((err) => {
        callback(false, err);
        
    })
}

export const getUserName = (token:string, callback?: any) => {
    const decoded: any = jwtDecode(token);
    console.log(decoded);
    if(decoded.user) {
        callback(decoded.user)
    } else {
        callback(null)
    }
    
}

export const getDataUser = (token:string, callback?: any) => {
    if(token) {
        const decoded: any = jwtDecode(token);
        console.log(decoded);
        if(decoded) {
            axios.get(`https://fakestoreapi.com/users/${decoded.sub}`).then((res) => {
                callback(res.data);
            }).catch((err) => {
                callback(err);
            })
        } else {
            callback(null);
        }
    }
    
}