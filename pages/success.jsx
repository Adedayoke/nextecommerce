import React, {useState, useEffect} from 'react';
import { useStateContext } from '@/context/StateContext';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {runFireworks} from '@/lib/utils'
const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities }= useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks();
    }, [])
  return (
    <div className='success-wrapper'>
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Than you for your order</h2>
            <p className="email-msg">
                Check your email inbox for your reciept
            </p>
            <p className="description">
                If you have any questions, please email <a href="mailto:order@example.com" className="email">adedayoke2006@gmail.com</a> 
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>Continue shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success