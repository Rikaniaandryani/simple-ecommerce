import Button from "../Elements/button";
import { ReactNode } from "react";
import './card-product.css';
import { Link } from "react-router-dom";

interface Props {
    id?: string;
    title?: string;
    description?: string;
    img?: string;
    price?: number;
    children?: string;
    handleAddToCart?: (data: string | undefined) => void
}

interface PropsCard {
    id: string;
    children?: ReactNode;
   
}

function CardProduct({children, id}: PropsCard) {
    return (
        <>
            <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                {children}
            </div>
        </>
    )
}

const HeaderCard = ({img}: Props) => {
    return (
        <>
            {/* <Link to="#"> */}
                <img src={img} alt="shoes" className="p-8 rounded-t-lg image-card" />
            {/* </Link> */}
        </>
    )
}

const BodyCardProduct = ({title, children, id}: Props) => {
    return (
        <>
            <div className="px-5 pb-5">
                    <Link to={`/product/${id}/${title}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-white title">{title}</h5>
                        <p className="text-s text-white">
                            {children?.substring(0,100)}
                        </p>
                    </Link>
                </div>
        </>
    )
}

const FooterCard = ({price, handleAddToCart, id}: Props) => {
    return (
        <>
            <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">
                        {price?.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                    </span>
                    <Button nameClass="!bg-blue-600" text="Add to cart" direct="detail-product" onClickButton={handleAddToCart} />
                </div>
        </>
    )
}

CardProduct.Header = HeaderCard;
CardProduct.Body = BodyCardProduct;
CardProduct.Footer = FooterCard;

export default CardProduct;