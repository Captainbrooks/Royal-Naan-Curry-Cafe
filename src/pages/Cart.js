import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, AddToCartArray, removeFromCart, increaseQuantity, decreaseQuantity } from "../store/features/cartSlice"
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "../styles/Cart.css";
import { FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import emptyCart from "../images/emptyshoppingcart.avif";
import Checkout from './Checkout';
import { selectUser } from '../store/features/userSlice';



function Cart() {


    const user=useSelector(selectUser);


    const startHour = 14; 
    const endHour = 22;
    const options = [];

    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            if (hour === endHour && minute === 0) {
                break;
            }
            const displayHour = hour > 12 ? hour - 12 : hour;
            const timeString = `${displayHour}:${minute === 0 ? "00" : minute} pm`;
            options.push(
                <option key={timeString} value={timeString}>
                    {timeString}
                </option>
            );
        }
    }

    options.push(
        <option key="10:00 pm" value="10:00 pm">
            10:00 pm
        </option>
    );


    const currentTime = new Date(Date.now());
    const futureTime = new Date(currentTime.getTime() + 30 * 60 * 1000);
    const futureTimeFormatted = `${new Date(futureTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const cart = useSelector(selectCart);
    const dispatch = useDispatch();



// to calculate the total number of items in the cart regardless of repition of same food
    const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);


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
    



useEffect(()=>{
    handleGrandTotal();
},[cart])


    return (
        <div>
            <Navbar />
            <div className="container-fluid ">
 
            <h1 className="text-warning my-4 text-center" style={{ display: cart.length > 0 ? 'block' : 'none'}}>Items in the Cart</h1>

            <div className="container-xl border border-danger d-flex flex-column justify-content-">

             



        
                    {cart.length > 0 ? (
                           <div className="row">
                        <div className="col-md-8 border border-danger">
                            {cart.map((c) => (

                            

                                <div className="cart-items" key={c._id}>
                                    <div className="cart-food-image">
                                        <img src={c.imgUrl} alt="food image" className='food' />
                                        <div><h5 className='text-danger cart-food-info'>{c.name}</h5></div>
                                        <div><span className='text-dark cart-food-info'>{c.description}</span></div>
                                    </div>
                                    <div className="food-info">
                                        <div className="buttons">
                                            <button className=' text-customize .bg-body-secondary btn btn-light text-dark' onClick={() => dispatch(decreaseQuantity(c._id))}>-</button>
                                            <div className=' text-customize text-dark'>{c.quantity}</div>

                                            <button className=' text-customize .bg-body-secondary btn btn-light text-dark' onClick={() => dispatch(increaseQuantity(c._id))}>+</button>
                                        </div>
                                        <button className='btn btn-danger remove-btn' onClick={() => dispatch(removeFromCart(c._id))}>Remove</button>
                                    </div>
                                </div>
                                
                            ))}
 <div className="redirect-button"><Link to="/order-online"> <button className='btn btn-warning' style={{marginBottom:"20px",marginTop:"20px"}}>Add More Food Items To Cart</button></Link></div> 
                            
                        </div>




                        <div className="col-md-4 border border-primary">
                        <div className="bill-info">
                            <h3 className='text-warning'>Your Order</h3>

                            <div className="food-items-info">
                                {cart.length > 0 ? (
                                    <table className="billing-table">

                                        <tbody>
                                            {cart.map((item) => (
                                                <tr className="billing-row text-secondary" key={item._id}>
                                                    <td className='td'>{item.quantity}</td>
                                                    <td className='td'>x</td>
                                                    <td className='td'>{item.name}</td>
                                                    <td className='td'>${item.price * item.quantity}</td>
                                                    <td className='td'><small className='small' onClick={() => dispatch(removeFromCart(item._id))}>Remove</small></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No items in the cart</p>
                                )}
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
                                    <label className='text-dark price'>Number of Items</label>
                                    <h6 className='text-dark price'>{totalNumberOfItems}</h6>
                                </div>

                                <div className="total-money">
                                    <label className='text-dark price'>Grand Total</label>
                                    <h6 className='text-dark price'>${grandTotal}</h6>
                                </div>

                                <div className="total-money">
                                    <span className='text-dark'> Pick up at    <select>
                                        {options}
                                    </select> on {futureTimeFormatted}
                                    </span>
                                </div>
                                <div className="checkout">
                                   <Link to={user ? '/checkout':'/login' }><button className='btn btn-warning text-white'>Checkout</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                       
                        
                    ) : (
                        <div className="empty-cart" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className="cart-info">
                              <div className="empty-cart-logo"><img src={emptyCart} alt="empty cart" height={'50%'} width={"50%"} /></div> 
                              <h1 className='text-secondary' style={{ marginTop: "30px",marginBottom:"20px" ,display:'flex',justifyContent:'center',alignItems:'center'}}>No Items Found..</h1>
                              <div className="redirect-button">  <Link to="/order-online"><button className='btn btn-warning text-white fw-bold' style={{marginBottom:"30px"}}>Add Food to Cart</button></Link></div>
                            </div>
                        </div>
                    )}
             


                {/* if items in the cart exists */}


         
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;

