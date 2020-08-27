import React from 'react';
import './Course.css'
const Course = (props) => {
    
    
    return (
        
       
        <div className="img-sizing box-shadow">
            <img src={props.src} alt="Image not found" /><br/><br/>
            <h3>{props.title}</h3>
            <h3><small>Course Fee: </small>{props.fee}</h3>
            <small>Limited time offer enroll soon... </small> <br/><br/>
            <button className="btn-primary p-2 text-center rounded-sm" onClick={() =>props.handleCourseCart(props)}>Enroll Now</button>

            {
                
            }
           
        
        </div>
    );
};

export default Course;