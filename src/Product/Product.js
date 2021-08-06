import React from 'react'; 
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({title, image, price, rating, description}) {
    return (
        <div className="product">
            <div classname="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                </div>
            </div>
            <img src={image} alt="book"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
