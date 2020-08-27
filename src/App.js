import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Course from './Components/Course/Course';
import graphic from '../src/coursee.com/course-image/graphic-design.png'
import web from '../src/coursee.com/course-image/web-design.png'
import data from '../src/coursee.com/course-image/data-entry.png'
import facebook from '../src/coursee.com/course-image/facebook-marketing.png'
import seo from '../src/coursee.com/course-image/seo.png'
import youtubeMkt from '../src/coursee.com/course-image/youtube marketing.png'
import digitalMkt from '../src/coursee.com/course-image/digital-marketing.png'
import english from '../src/coursee.com/course-image/english-course.png'
import ielts from '../src/coursee.com/course-image/ielts-course.png'
import gre from '../src/coursee.com/course-image/gre-course.png'
import gmat from '../src/coursee.com/course-image/gmat-course.jpg'
import faceBook from '../src/coursee.com/course-image/facebook-marketing.png'
import french from '../src/coursee.com/course-image/french-learning.png'
import { useState } from 'react';
import Cart from './Components/Cart/Cart';


function App() {
  const [courseCart,setCourseCart] = useState([])
  
  const handleCourseCart = (props) => {
 
    const newCourseCart = [...courseCart,props]
    setCourseCart (newCourseCart)
   
  }
  
  return (
    <div>
      <Header></Header>


      <div className="container d-flex">
        <Course src={graphic} title="Graphics Design Course" fee="7700" handleCourseCart={handleCourseCart}></Course>
        <Course src={web} title="Web Design and Development" fee="1549" handleCourseCart={handleCourseCart}></Course>
        <Course src={data} title="Data Entry Expert" fee="2599" handleCourseCart={handleCourseCart}></Course>
      </div>



      <div className="d-flex container">

        <Course src={seo} title="SEO Training Program" fee="12549" handleCourseCart={handleCourseCart}></Course>
        <Course src={youtubeMkt} title="Youtube Marketing course" fee="1549" handleCourseCart={handleCourseCart}></Course>
        <Course src={faceBook} title="Facebook Marketing Course" fee="2599"handleCourseCart={handleCourseCart}></Course>
      </div>
      <div className="d-flex container">

        <Course src={english} title="Expert Level English" fee="5999" handleCourseCart={handleCourseCart}></Course>

        <Course src={ielts} title="IELTS Course" fee="12500" handleCourseCart={handleCourseCart}></Course>
        <Course src={gre} title="GRE Course" fee="12500" handleCourseCart={handleCourseCart}></Course>
      </div>
      <div className="d-flex container">

        <Course src={digitalMkt} title="Digital Marketing" fee="25999" handleCourseCart={handleCourseCart}></Course>

        <Course src={gmat} title="GMAT Course" fee="12500" handleCourseCart={handleCourseCart}></Course>
        <Course src={french} title="French Language" fee="7500" handleCourseCart={handleCourseCart}></Course>
      </div>
      <div className="container d-flex">
        <div className="cart-part ">
        <Cart cart ={courseCart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
