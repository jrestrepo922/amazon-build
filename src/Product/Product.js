import React from 'react'; 
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product() {
    return (
        <div className="product">
            <div classname="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                    <p><StarRateIcon/></p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="book"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
