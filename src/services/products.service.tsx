import axios from "axios"
const getProducts = (callback: any) => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            console.log(res);
            callback(res.data);
        }).catch(err => {
            callback(err);
        })

    
}

const getDetailProduct = (id: any, callback: any) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
        callback(res.data);
    }).catch(err => {
        callback(err)
    });
}

export default {getProducts, getDetailProduct};