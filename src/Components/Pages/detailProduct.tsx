import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import productService from "../../services/products.service";
import StarRating from "../Elements/starRating";

export const DetailProduct = () => {

    const { id, name } = useParams();
    const [detailItem, setDetailItem] = useState<any>(null);

    useEffect(() => {
        if (id) {
            productService.getDetailProduct(id, (res: any) => {
                setDetailItem(res);
                console.log(detailItem);

            });
        }

    }, []);

    console.log(detailItem)

    return (
        <>
            <div className="wrapper-detail-product overflow-hidden flex justify-start w-fit m-10 rounded-2xl border-[1px] border-gray-600 h-[420px]">
                <div className="image-item h-full w-1/4">
                    <img src={detailItem?.image} className="w-full h-full object-cover" alt={detailItem?.title} />
                </div>
                <div className="detail-product p-[20px] w-3/4">
                    <div className="flex items-center justify-between">
                        <p className="text-xl">{detailItem?.title}</p>
                        <p className="text-3xl">{detailItem?.price.toLocaleString('id-ID', { style: "currency", currency: 'USD' })}</p>
                    </div>
                    <div className="rating mt-[20px]">
                        <StarRating rating={detailItem?.rating.rate} />
                    </div>
                    <div className="in-stock text-slate-300 text-[16px] mt-[10px]">
                        in stock
                    </div>
                    <div className="list-size flex items-center justify-start my-[20px]">
                        <button>XS</button>
                        <button className="ml-3">S</button>
                        <button className="ml-3">M</button>
                        <button className="ml-3">L</button>
                        <button className="ml-3">XL</button>
                    </div>
                    <div className="w-full border-t-2 border-gray-400"></div>
                    <div className="description my-[20px] text-slate-400 font-normal">
                        <p>{detailItem?.description}</p>
                    </div>
                    <div className="add-to-cart flex items-center">
                        <button className="!bg-blue-400 mr-[30px]">Buy Now</button>

                        <button className="!bg-cyan-800">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}