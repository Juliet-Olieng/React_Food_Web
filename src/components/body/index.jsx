import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest,
    faInstagram,
    faTwitter,
    faFacebook
    } from '@fortawesome/free-brands-svg-icons';
const Body =()=>{
    return(
        <div className="container">
            {/*  */}
            <div className="cont1">
                <div>
                    <h1 id="h1">All Fast Food is <img id="line"src={process.env.PUBLIC_URL+"images/line.png"} /> <br /> Available at Foodie</h1>
                    <div id="cont1">
                    <img id="person" src={process.env.PUBLIC_URL+"images/download.jpeg"} />
                        <p id="p">We Are Just A Click Away When You Crave For Delicious Food </p>
                    </div>
                    <div id="cont1">
                        <button id="btn">Buy Now</button>
                        <div className="icon">
                        <img id="icons" src={process.env.PUBLIC_URL+"images/icon1.png"} />
                        <p>How To Order</p>
                        </div>
                    </div>
                </div>
                <div>
                <img src={process.env.PUBLIC_URL+"images/sandwich.png"} />
                </div>
            </div>
            {/*  */}
            <div className="cont2">
                <div id="cont1">
                    <img id="icon1" src={process.env.PUBLIC_URL+"images/icon2.png"} alt="" />
                    <div >
                        <h4>Fast Delivery</h4>
                        <p>The Food Will Be Delived To <br />Your Home within 1-2 Hours Of <br />Your Ordering</p>

                    </div>
                </div>
                {/*  */}
                <div id="cont1">
                    <img id="icon1" src={process.env.PUBLIC_URL+"images/icon3.png"} alt="" />
                    <div>
                        <h4>Fresh Food</h4>
                        <p>Your Food Will Be Delivered <br />100% Fresh To Your Home .We <br />Do Not Deliever Stale Food</p>

                    </div>
                </div>
                {/*  */}
                <div id="cont1">
                    <img id="icon1" src={process.env.PUBLIC_URL+"images/icon4.png"} alt="" />
                    <div>
                        <h4>Free Delivery</h4>
                        <p>Your Food delivery Is <br />Absolutely Free .No Cost <br />Just Order and Enjoy</p>

                    </div>
                </div>
            </div>
            {/*  */}
            <div>
                <div className="cont1">
                    <h1>Best <span>Delivered</span><br/>Categories  </h1>
                    <p>Here Are Some Of Our Best Distributed <br />Categories . If You Want You Can Order <br />From Here</p>
                </div>
                <div className="cont1">
                    <div>
                    <img className="img" src={process.env.PUBLIC_URL+"images/Burger.png"} />
                    <h4>Chicken Burger</h4> 
                    <p>order Now </p>
                    </div>
                    {/*  */}
                    <div >
                    <img className="img" src={process.env.PUBLIC_URL+"images/Pizza.png"} />
                    <h4>Chicken Pizza</h4> 
                    <p>order Now </p>
                    </div>
                    {/*  */}
                    <div>
                    <img className="img" src={process.env.PUBLIC_URL+"images/Fries.png"} />
                    <h4>French Fries</h4> 
                    <p>order Now </p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Our <span>Regular</span> Menu</h1>
                <div className="cont1">
                    <p>These Are Our Regular menus. You Can <br />Order Anything You Like</p>
                    <button id="btn">See All</button>
                </div>
                {/*  */}
                <div className="cont1">
                    
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/img1.png"} />
                    <div className="cont3">
                    <h4>Chicken Burger</h4>
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div> 
                    <p>$3.50 <button id="btn">Buy Now</button></p>
                    </div>
                    </div>
                   
                    {/*  */}
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/chicken.png"} />
                    <div className="cont3">
                    <h4>Chicken Pizza</h4>  
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div>
                    <p>$4.20 <button id="btn">Buy Now</button></p>
                    </div>
                    </div>
                    {/*  */}
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/Fry.png"} />
                    <div className="cont3">
                    <h4>Chicken Pizza</h4>  
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div>
                    <p>$5.00   <button id="btn">Buy Now</button></p>
                    </div>

                    </div>
                </div>
                {/* ******** */}

                <div className="cont1">
                    
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/Grill.png"} />
                    <div className="cont3">
                    <h4>Grill Sandwich</h4>
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div> 
                    <p>$4.80 <button id="btn">Buy Now</button></p>
                    </div>
                    </div>
                   
                    {/*  */}
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/Taco.png"} />
                    <div className="cont3">
                    <h4>Taco Traifi</h4>  
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div>
                    <p>$3.63 <button id="btn">Buy Now</button></p>
                    </div>
                    </div>
                    {/*  */}
                    <div id="cont3">
                    <img src={process.env.PUBLIC_URL+"images/Fry.png"} />
                    <div className="cont3">
                    <h4>Noodie's Ramen</h4>  
                    <div className="icon"> 
                    <img id="star" src={process.env.PUBLIC_URL+"images/star.png"} />
                    <p> (160)</p>
                    </div>
                    <p>$6.50    <button id="btn">Buy Now</button></p>
                    </div>

                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container3">
            <div >
                <img id="bug" src={process.env.PUBLIC_URL+"images/bug.png"} alt="" />
            </div>
            <div id="cont4">
                <img className="bug" src={process.env.PUBLIC_URL+"images/bug2.png"} alt="" />
                <img className="bug"  src={process.env.PUBLIC_URL+"images/bug3.png"} alt="" />
            </div>

            </div>
            {/* ******************* */}
            <div className="foot">
            <div className="footer">
                <div>
                
                    <h3>Foodish</h3>
                    <p>Continue Foodish 2023 all rights reserved</p>
                    <h3>Follow Us On</h3>
                    <div className="font">
                   <FontAwesomeIcon className="icon" icon={faPinterest} />
                   <FontAwesomeIcon className="icon" icon={faInstagram} />
                   <FontAwesomeIcon className="icon" icon={faTwitter} />
                   <FontAwesomeIcon className="icon" icon={faFacebook} />
                   </div>
                </div>
                {/*  */}
                <div>
                   <h3>Menu</h3>
                   <li id="li"><a href="">Home</a></li>
                   <li id="li"><a href="">Offers</a></li>
                   <li id="li"><a href="">Service</a></li>
                   <li id="li"><a href="">About Us</a></li>
                </div>
                {/*  */}
                <div>
                <h3>Information</h3>
                
                   <li id="li"><a href="">Menu</a></li>
                   <li id="li"><a href="">Quality</a></li>
                   <li id="li"><a href="">Make a Choice</a></li>
                   <li id="li"><a href="">Salad With Vegetable</a></li>
                   <li id="li"><a href="">Fast Delivery</a></li>
                   <li id="li"><a href="">Subscribe</a></li>
              
                </div>
                {/*  */}
                <div>
                   <h3>Contact</h3>
                   <li id="li"><a href="">+123 456 789</a></li>
                   <li id="li"><a href="">Explore</a></li>
                   <li id="li"><a href="">info@foodish.com</a></li>
                   <li id="li"><a href="">Salad With Vegetable</a></li>
                   <li id="li"><a href="">1245, New York, USA</a></li>
                   <li id="li"><a href="">Subscribe</a></li>
                </div>
                </div>
                
            </div>
        </div>

        
    )

}
export default Body