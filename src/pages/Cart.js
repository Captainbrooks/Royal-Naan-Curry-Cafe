import React, { useEffect, useState } from 'react'
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
import Headroom from 'react-headroom';





function Cart() {

    const user = useSelector(selectUser);
    
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


    const [Subtotal, setSubTotal] = useState(0);
    const [HST, setHST] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);


    const calculateSubtotal = () => {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.price * item.quantity;
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




    useEffect(() => {
        handleGrandTotal();
    }, [cart])


    return (
        <div>

<Navbar/>

            <div className="container-fluid ">

                <h1 className="text-warning my-4 text-center" style={{ display: cart.length > 0 ? 'block' : 'none' }}>Items in the Cart</h1>

                <div className="container-xxl d-flex flex-column justify-content-">


                    {cart.length > 0 ? (
                        <div className="row">
                            <div className="col-12 col-md-8 mb-5">
                                {cart.map((c) => (

                                    <div className="container-fluid d-flex flex-column my-4 each-item" key={c._id}>
                                        <div className="row ">
                                            <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center py-2">
                                                <img src={c.imgUrl} alt="food image" className='food img-fluid' />
                                                <div><h5 className='text-warning fw-bold my-2'>{c.name}</h5></div>
                                                <div><span className='text-muted'>{c.description}</span></div>
                                            </div>

                                            <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
                                                <div className="container-fluid d-flex justify-content-around">
                                                    <button className='bg-body-secondary btn btn-light text-dark fw-bold' onClick={() => dispatch(decreaseQuantity(c._id))}>-</button>
                                                    <div className='text-muted fs-5'>{c.quantity}</div>

                                                    <button className='bg-body-secondary btn btn-light text-dark' onClick={() => dispatch(increaseQuantity(c._id))}>+</button>
                                                </div>
                                                <button className='btn btn-danger mt-4 remove-btn fw-bold' onClick={() => dispatch(removeFromCart(c._id))}>Remove</button>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                                <div className='d-flex justify-content-center'><Link to="/order-online"> <button className='btn btn-warning text-white fw-bold my-2'>Add More Items</button></Link></div>

                            </div>

                            <div className="col-12 col-md-4 bill">
                                <div className="container-fluid">
                                    <h3 className='text-success text-center my-3 fw-bold'>Your Order</h3>

                                    <div className="container-lg">
                                        {cart.length > 0 ? (
                                            <table className="billing-table">

                                                <tbody>
                                                    {cart.map((item) => (
                                                        <tr className="billing-row text-secondary" key={item._id}>
                                                            <td className='td'>{item.quantity}</td>
                                                            <td className='td'>x</td>
                                                            <td className='td'>{item.name}</td>
                                                            <td className='td'>${item.price * item.quantity}</td>
                                                            <td className='td'><small className='fw-bold cursor-pointer small-remove p-1' onClick={() => dispatch(removeFromCart(item._id))}>Remove</small></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <p>No items in the cart</p>
                                        )}
                                    </div>

                                    <div className="d-flex flex-column p-2">
                                        <div className=" d-flex flex-row justify-content-between align-items-center">
                                            <label className='text-dark fw-bold'>Subtotal</label>
                                            <h6 className='text-dark fw-bold'>${Subtotal}</h6>
                                        </div>

                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <label className='text-dark fw-bold'>HST</label>
                                            <h6 className='text-dark fw-bold'>${HST}</h6>
                                        </div>

                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <label className='text-dark fw-bold'>Number of Items</label>
                                            <h6 className='text-dark fw-bold'>{totalNumberOfItems}</h6>
                                        </div>

                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <label className='text-dark fw-bold'>Grand Total</label>
                                            <h6 className='text-dark fw-bold'>${grandTotal}</h6>
                                        </div>

                                        <div className="d-flex flex-row justify-content-start align-items-center">
                                            <span className='text-danger fw-bolder'> Pick up at    <select>
                                                {options}
                                            </select> on {futureTimeFormatted}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-center  my-5">
                                            <Link to={user ? '/checkout' : '/login'}><button className='btn btn-warning text-white fw-bold'>Checkout</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container-lg d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img src={emptyCart} alt="empty cart" height={'50%'} width={"50%"} />
                                <h2 className='text-muted fw-bold my-2 text-center'>No Items Found..</h2>
                                <div>  <Link to="/order-online"><button className='btn btn-warning text-white fw-bold my-2'>Add Food to Cart</button></Link></div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;

