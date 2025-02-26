/* eslint-disable @typescript-eslint/no-explicit-any */

import Header from "../Layouts/header";
import CardProduct from "../Fragments/card-product";
import { useEffect, useRef, useState } from "react";
import productService from "../../services/products.service";

interface CartItem {
    id: string;
    name: string;
    qty: number;
    price: number;
  };

function ProductPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dataProduct, setDataProduct] = useState<any>([]);
    const daatList = [
        {
            id: '1',
            title: "Sepatu Baru 1",
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Assumenda distinctio, temporibus laudantium quibusdam similique inventore 
            ipsam deleniti blanditiis qui ratione eos soluta non eaque nobis? 
            Aut natus dolor rem quia.`,
            price: 1000000,
            img: "brown-leather-shoes.jpg"
        },
        {
            id: '2',
            title: "Sepatu Baru 2",
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Assumenda distinctio, temporibus laudantium quibusdam similique inventore 
            ipsam deleniti blanditiis qui ratione eos soluta non eaque nobis? 
            Aut natus dolor rem quia.`,
            price: 500000,
            img: "brown-leather-shoes.jpg"
        },
        {
            id: '3',
            title: "Sepatu Baru 3",
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Assumenda distinctio, temporibus laudantium quibusdam similique inventore 
            ipsam deleniti blanditiis qui ratione eos soluta non eaque nobis? 
            Aut natus dolor rem quia.`,
            price: 2000000,
            img: "brown-leather-shoes.jpg"
        },
        {
            id: '4',  
            title: "Sepatu Baru 4",
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Assumenda distinctio, temporibus laudantium quibusdam similique inventore 
            ipsam deleniti blanditiis qui ratione eos soluta non eaque nobis? 
            Aut natus dolor rem quia.`,
            price: 3000000,
            img: "brown-leather-shoes.jpg"
        },
        {
            id: '5',
            title: "Sepatu Baru 5",
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Assumenda distinctio, temporibus laudantium quibusdam similique inventore 
            ipsam deleniti blanditiis qui ratione eos soluta non eaque nobis? 
            Aut natus dolor rem quia.`,
            price: 5000000,
            img: "brown-leather-shoes.jpg"
        }
    ]

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        setCart(storedCart ? JSON.parse(storedCart) : []);
    }, [])

    useEffect(() => {
        if ( cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = item.price; 
                return acc + product * item.qty
            }, 0)
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        
    }, [cart])

    const handleAddToCart = (productName: any) => {
        if(cart.find(item => item.id === productName.id)) {
            setCart(
                cart.map(item => item.id === productName.id ? {...item, qty: item.qty + 1} : item
                )
            )
        } else {
            setCart([
                ...cart,
                {
                    id: productName.id,
                    name: productName.title,
                    qty: 1,
                    price: productName.price
                }
            ])
        }
        // const existingIndex = cart.findIndex(x => x.id === productName.id);
        // if(existingIndex !== -1) {
        //     const updateCart = cart.map((item, index) => 
        //         index === existingIndex ? {...item, qty: item.qty + 1, price: item.price} : item
        //     )
        //     setCart(updateCart);
        // } else {
        //     setCart([
        //         ...cart, {
        //             name: productName.title,
        //             id: productName.id,
        //             qty: 1,
        //             price: productName.price
        //         }
        //     ])
        // }
    }

    // useReff
    const cartReff = useRef([
        {
            id: "1",
            name: "Sepatu Baru",
            price: 1000000,
            qty: 1,
        }
    ]);

    const handleToCartRef = (product: any) => {
        cartReff.current = [...cartReff.current, { id: product.id, name: product.title, qty: 1, price: product.price }]
    }

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "block";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart])

    useEffect(() => {
        productService.getProducts((res : any) => {
            setDataProduct(res);
        })
    }, []);


    const listProduct =  dataProduct.map((item) => 
                <div className="m-2" key={item.id}>
                    <CardProduct id={item.id}>
                        <CardProduct.Header img={item.image}></CardProduct.Header>
                        <CardProduct.Body title={item.title} price={item.price} img={item.image} id={item.id}>
                            {item.description}
                        </CardProduct.Body>
                        <CardProduct.Footer id={item.id} price={item.price} handleAddToCart={(event) => handleAddToCart(item)}/>
                    </CardProduct>
                    
                </div>
          );

    

    return (
        <>
            <div className="flex">
                <div className="w-3/4">
                    <div className="grid grid-cols-3 py-5 max-w-[1040px] m-auto">
                        {listProduct}
                    </div>
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                    
                    <ul>
                        {
                            cart.map((item) => 
                                <li key={item.name}>
                                    {item.name} 
                                    <div>
                                        <span>Qty: {item.qty}</span>
                                        <span className="mx-5">x</span>
                                        <span>{item.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
                                    </div>
                                </li>    
                            )
                        }
                    </ul>
                    <div ref={totalPriceRef} className="total flex justify-between items-center border-t-2 border-gray-600">
                        <h1 className="text-3xl">Total</h1>
                        <h2 className="text-2xl">{totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} </h2>
                    </div>
                </div>
            </div>
            {/* <div className="mt-5">
                <Counter />
            </div> */}
            
        </>
    )
}

export default ProductPage;