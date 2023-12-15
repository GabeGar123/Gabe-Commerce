import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import imageBanner from "../assets/Images/banner.jpg";
import menShoeImage from "../assets/Images/shoe1.jpg";
import womenShoeImage from "../assets/Images/shoe2.jpg";
import kidsShoeImage from "../assets/Images/shoe3.jpg";
import sportsShoeImage from "../assets/Images/shoe4.jpg";

function homePage() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <a class="navbar-brand mb-0" href="#">
          Gabe Commerce
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav" id="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#news" class="nav-link">
                Men
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                Women
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                Kids
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                Sign In
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="banner-container">
        <img
          src={imageBanner}
          class="banner-item-1 image-fluid"
          alt="main page banner"
        ></img>
        <div class="banner-item-2">
          <h3>Shop the latest trends in fashion</h3>
        </div>
      </div>

      <div id="collection" class="container text-center">
        <div class="row">
          <div id="men-option" class="col">
            <img src={menShoeImage}></img>
            <h3>Shop Men</h3>
          </div>
          <div id="women-option" class="col">
            <img src={womenShoeImage}></img>
            <h3>Shop Women</h3>
          </div>
        </div>
        <div class="row">
          <div id="shoe-option" class="col">
            <img src={kidsShoeImage}></img>
            <h3>Shop Kids</h3>
          </div>
          <div id="sports-option" class="col">
            <img src={sportsShoeImage}></img>
            <h3>Shop Sports</h3>
          </div>
        </div>
      </div>

      <div class="container-fluid my-5" id="footer"></div>
    </>
  );
}

export default homePage;
