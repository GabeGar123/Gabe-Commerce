import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageBanner from '../assets/Images/banner.jpg';
import menShoeImage from '../assets/Images/shoe1.jpg';
import womenShoeImage from '../assets/Images/shoe2.jpg';
import kidsShoeImage from '../assets/Images/shoe3.jpg';
import sportsShoeImage from '../assets/Images/shoe4.jpg';


function homePage() {
  return (
    <>
      <div id="header">
        <ul id="nav-bar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">Men</a>
          </li>
          <li>
            <a href="#contact">Women</a>
          </li>
          <li>
            <a href="#about">Kids</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Sign In</a>
          </li>
          <li>
            <a href="#about">Cart</a>
          </li>
        </ul>
      </div>

      <div class="banner-container">
        <img src = {imageBanner} class = "banner-item-1" alt="main page banner"></img>
        <div class = "banner-item-2">
          <p>Shop the latest trends in fashion</p>
        </div>
      </div>

      <div id="collection" class="container text-center">
        <div class="row">
          <div id="men-option" class="collection-box-1 col">
            <img src={menShoeImage} ></img>
            <h3>Shop Men</h3>
          </div>
          <div id="women-option" class="collection-box-2 col">
            <img src={womenShoeImage}></img>
            <h3>Shop Women</h3>
          </div>
        </div>
        <div class="row">
          <div id="shoe-option" class="collection-box-3 col">
            <img src={kidsShoeImage}></img>
            <h3>Shop Kids</h3>
          </div>
          <div id="sports-option" class="collection-box-4 col">
            <img src={sportsShoeImage}></img>
            <h3>Shop Sports</h3>
          </div>
        </div>
        </div>
    </>
  );
}

export default homePage;
