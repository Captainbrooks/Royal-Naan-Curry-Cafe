import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectCart } from '../store/features/cartSlice'
import "../styles/Checkout.css";
import Navbar from '../components/Header/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Checkout() {
    const currentYear = new Date().getFullYear();
const cart=useSelector(selectCart);

const [Subtotal,setSubTotal]=useState(0);
      const [HST,setHST]=useState(0);
    const [grandTotal , setGrandTotal]=useState(0);


const calculateSubtotal=()=>{
    let subtotal=0;
    cart.forEach((item)=>{
        subtotal+=item.price * item.quantity;
    });
    setSubTotal(subtotal);
    return subtotal;
}



    const handleGrandTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = subtotal * 0.13;
        const totalWithTax = subtotal + tax;
    
        setSubTotal(subtotal.toFixed(2));
        setHST(tax.toFixed(2));
        setGrandTotal(totalWithTax.toFixed(2));
    };


    const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);
    

useEffect(()=>{
    handleGrandTotal();
},[cart])





  return (


  
  <>
  <Navbar/>
  <div className="container checkout-title">
        <h1 className='text-warning'>Checkout</h1>
 </div>
 <div className="container checkout-page">


    <div className="checkout-items-container">

     <div className="checkout-items">
                                {cart.length > 0 && (

                                    <div>
                                       <h4 className='container text-warning'>Your Order Summary</h4>
                                       <hr />
                                    <table className="container">
                                        
                                        <tbody>
                                            {cart.map((item) => (
                                                <tr className="billing-row text-secondary" key={item._id}>
                                                    <td className='td'>{item.quantity}</td>
                                                    <td className='td'>x</td>
                                                    <td className='td'>{item.name}</td>
                                                    <td className='td'>${item.price * item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </div>
                                ) 
                                }
                            </div>
                      
                            <div className="total">
                                <div className="total-money">
                                    <label className='text-dark price'>Subtotal</label>
                                    <h6 className='text-dark price'>${Subtotal}</h6>
                                </div>

                                <div className="total-money">
                                    <label className='text-dark price'>HST</label>
                                    <h6 className='text-dark price'>${HST}</h6>
                                </div>

                                <div className="total-money">
                                    <label className='text-dark price'>Grand Total</label>
                                    <h6 className='text-dark price'>${grandTotal}</h6>
                                </div>

                            </div>

                    </div>
                    

     <div className="checkout-card-details">

        <div className="checkout-form-title">
            <h4 className='text-warning'>Card Details</h4>
            <hr />
        </div>
 
<div className="checkout-form">
        <form className='payment-form'>

       
            <label className='text-muted'>Card Holder</label>
            <input type="card text" />

            <label className='text-muted'>Expiration Date</label>
            <div className="expiration-date">
                <input type="number" min="1" max="12" placeholder='MM'/> / <input type="number" min={currentYear} pattern='\d{2}'  placeholder='YY'/>
            </div>


            <label className='text-muted'>Card Number</label>
            <input type="text"/>

            <label className='text-muted'>CVC</label>
            <input type="number"/>

<hr />
            <button className='text-white btn btn-primary'>Proceed</button>
            
        </form>
        </div>
     </div>

    </div>
    <Footer/>
 </>
  )
}

export default Checkout
