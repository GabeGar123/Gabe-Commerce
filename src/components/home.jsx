import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import imageBanner from "../assets/Images/banner.jpg";
import menShoeImage from "../assets/Images/shoe1.jpg";
import womenShoeImage from "../assets/Images/shoe2.jpg";
import kidsShoeImage from "../assets/Images/shoe3.jpg";
import sportsShoeImage from "../assets/Images/shoe4.jpg";

function homePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <a className="navbar-brand mb-0" href="#">
          Gabe Commerce
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav" id="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#news" className="nav-link">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="banner-container">
        <img
          src={imageBanner}
          className="banner-item-1 image-fluid"
          alt="main page banner"
        ></img>
        <div className="banner-item-2  bg-dark">
          <h5>Shop the latest trends in fashion</h5>
        </div>
      </div>

      <div className="container-fluid text-center py-5" id="motto">
        <h1>You Didn't Come This Far To Come This Far</h1>
      </div>

      <div id="collection" className="container text-center">
        <div className="row">
          <div id="men-option" className="col">
            <a href="/shop.jsx">
              <img src={menShoeImage}></img>
              <h3>Shop Men</h3>
            </a>
          </div>
          <div id="women-option" className="col">
            <a href="#">
              <img src={womenShoeImage}></img>
              <h3>Shop Women</h3>
            </a>
          </div>
        </div>
        <div className="row">
          <div id="shoe-option" className="col">
            <a href="#">
              <img src={kidsShoeImage}></img>
              <h3>Shop Kids</h3>
            </a>
          </div>
          <div id="sports-option" className="col">
            <a href="#">
              <img src={sportsShoeImage}></img>
              <h3>Shop Sports</h3>
            </a>
          </div>
        </div>
      </div>

      <div className=" container-fluid my-5 mb-0" id="footer">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="bi bi-person"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="bi bi-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="bi bi-github"></i>
              </a>
            </section>
          </div>
          <div className="text-center p-3">
            @2023 Gabe Commerce. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default homePage;
