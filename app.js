import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo"
                 src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-36241d.png" />
            </div>
            <div className="nav-items">
                <ui>
                   <li>Home</li> 
                   <li>About Us</li> 
                   <li>Contact Us</li> 
                   <li>Cart</li> 
                </ui>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/37179189A.png"/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    );
};
const AppLayout = () => {
    return <div className="app">
               <Header />
               <Body />
           </div> 
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);