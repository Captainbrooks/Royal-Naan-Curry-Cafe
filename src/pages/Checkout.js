import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../store/features/cartSlice';
import "../styles/Checkout.css";
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Headroom from 'react-headroom';

function Checkout() {
    const [expiry, setExpiry] = useState('');

    const handleChange = (e) => {
        let inputValue = e.target.value;
        // Ensure only numbers are entered
        inputValue = inputValue.replace(/\D/g, '');
        
        // Format the input as MM/YY
        if (inputValue.length <= 2) {
            setExpiry(inputValue);
        } else if (inputValue.length > 2 && inputValue.length <= 4) {
            setExpiry(inputValue.slice(0, 2) + '/' + inputValue.slice(2));
        }
    };

    const currentYear = new Date().getFullYear();
    const cart = useSelector(selectCart);

    const [Subtotal, setSubTotal] = useState(0);
    const [HST, setHST] = useState(0);
    const [grandTotal , setGrandTotal] = useState(0);

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

    const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        handleGrandTotal();
    }, [cart]);

    return (
        <>
        <Headroom>
        <Navbar />
        </Headroom>
      
            <div className="container-fluid">
                <h1 className='text-warning my-4 text-center'>Checkout</h1>
                <div className="container-lg border d-flex flex-column justify-content-between">
                    <div className="row">
                        <div className="col-12 col-md-6 border">
                            <div className="container">
                                {cart.length > 0 && (
                                    <div>
                                        <h4 className='text-center fw-bold my-2 text-warning'>Your Order Summary</h4>
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
                                )}
                            </div>
                            <div className="container-fluid  my-5">
                                <div className="d-flex flex-row justify-content-between align-items-center my-1">
                                    <label className='text-dark fw-bold'>Subtotal</label>
                                    <h6 className='text-dark fw-bold'>${Subtotal}</h6>
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center my-1">
                                    <label className='text-dark fw-bold'>HST</label>
                                    <h6 className='text-dark price'>${HST}</h6>
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center my-1">
                                    <label className='text-dark fw-bold'>Grand Total</label>
                                    <h6 className='text-dark fw-bold'>${grandTotal}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 border">
                            <div className="container">
                                <h4 className='text-warning text-center fw-bold my-2'>Card Details</h4>
                                <hr />
                            </div>
                            <div className="checkout-form">
                                <form className='payment-form'>
                                    <label className='text-muted'>Card Holder</label>
                                    <input type="text" />

                                    <label className='text-muted'>Expiration Date</label>
                                    <input
                                        type="text"
                                        value={expiry}
                                        onChange={handleChange}
                                        placeholder='MM/YY'
                                        maxLength="5"
                                    />

                                    <label className='text-muted'>Card Number</label>
                                    <input type="text" />

                                    <label className='text-muted'>CVC</label>
                                    <input type="number" />

                                    <button className='text-white btn btn-primary my-2'>Proceed</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
