import React from 'react';
import "./Cart.css"
const Cart = (props) => {
   
    const courseAdd = props.cart
    
   
    let totalPrice = 0 ;
    for (let i = 0; i < courseAdd.length; i++) {
        const singleCourse = courseAdd[i];
        const singleCoursePrice = parseFloat(singleCourse.fee);
        totalPrice = totalPrice + singleCoursePrice;
    
     
    }

    const tax = totalPrice*12/100;
    const netPrice = totalPrice + tax;

    const mathRounding =num =>Math.round(num);
    
    return (
        <div className ="text-white text-center cart-styling"  >
           <h2 className="bg-primary p-3">Course Enrolled: {courseAdd.length}</h2>
           <h3>Total Price: {'$'+ mathRounding(totalPrice)} </h3>
           <h4>Tax + VAT : {'$'+ mathRounding(tax)}</h4>
           <br/><br/>
           <hr/>
           <h3>Net Price : { '$'+ mathRounding(netPrice)}</h3>
        </div>
    );
};

export default Cart;