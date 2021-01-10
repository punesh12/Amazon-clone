import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}] =useStateValue();
 
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://osseo.org/wp-content/uploads/2017/11/CONNECT_masthead_template_2018_1.jpg"
                />
                {basket?.length ===0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout_title" >Your Shopping Basket</h2>
                        {/** List of checkout product */}

                        {basket?.map(item =>{
                            console.log(item);

                        return(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            /> 
                        );

                        })}
                    </div> 
                )}
             </div>
             {basket.length >=0 && (
                 <div className="checkout__right">
                     <Subtotal />
                 </div>
             )}
        </div>
    )
}

export default Checkout
