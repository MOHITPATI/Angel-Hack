import React from "react";
import "../../assets/styles/body.css";
import image1 from "../../img/body_1.png"; // Replace with actual image path
import image2 from "../../img/body_2.png"; // Replace with actual image path
import image3 from "../../img/body_3.png"; // Replace with actual image path
import Footer from "../Footer/Footer";


const Body = () => {
  return (
    // <div className="body-container">
    //   <div className="overlay">
    //     <h1>Welcome to AngelHack</h1>
    //     <p>We connect with investors</p>
    //   </div>
    // </div>
    <div>
    <div className="body-container">
      <div className="overlay">
        <h1>Welcome to AngelHack</h1>
        <p>We connect with investors</p>
      </div>
    </div>
    <div>  
      <div className="content-section">
        <div className="content-item">
          <img src={image1} alt="Sample 1" className="content-image" />
          <p className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis placeat corporis ea sapiente explicabo quibusdam velit quam, earum sit nam, facilis quaerat iste a saepe omnis quos dolore debitis.
            Libero exercitationem eveniet laboriosam quod hic suscipit asperiores aliquid facere, consequuntur earum optio veritatis animi? Dolorem perspiciatis dignissimos maiores, cumque distinctio architecto quasi, et voluptates, debitis non unde asperiores neque?
          </p>
        </div>
        <div className="content-item reverse">
        <img src={image2} alt="Sample 2" className="content-image" />
          <p className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium tenetur quo vel quidem pariatur, sit voluptatem beatae atque dolore unde ab animi! Nobis, nam? Sed soluta eligendi alias nam.
            Quaerat, reiciendis rem! Est iusto adipisci recusandae dolorum et reiciendis totam sequi minus, tempora, cum ipsam, dicta fuga velit. Doloremque eius recusandae facilis! Est nulla praesentium commodi reprehenderit fugiat odio.
          </p>
          
        </div>
        <div className="content-item">
          <img src={image3} alt="Sample 3" className="content-image" />
          <p className="content-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odio eligendi ipsam. Impedit facere voluptatibus minus quos, ex saepe numquam, a rerum laudantium, rem in illum! Reprehenderit ea mollitia ipsa.
            consectetur adipisicing elit. At odio eligendi ipsam. Impedit facere voluptatibus minus quos, ex saepe numquam, a rerum laudantium, rem in illum! Reprehenderit ea mollitia ipsa.
            consectetur adipisicing elit. At odio eligendi ipsam. Impedit facere voluptatibus minus quos, ex saepe numquam, a rerum laudantium, rem in illum! Reprehenderit ea mollitia ipsa.
          </p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Body;
