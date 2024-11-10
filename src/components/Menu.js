import React, { useState } from "react";
import brett from "../images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg";
import farhad from "../images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg";
import keri from "../images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg";
import far from "../images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg";
import far2 from "../images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg";
import lou from "../images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg";
const Menu = () => {
  return (
    <section className="menu section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={brett} className="img-fluid menu-image" alt="brett" />

                <span className="menu-tag bg-warning">Breakfast</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Morning Fresh</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>12.50
                </span>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={farhad} className="img-fluid menu-image" alt="farhad" />

                <span className="menu-tag bg-warning">Lunch</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Tooplate Soup</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>24.50
                </span>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={keri} className="img-fluid menu-image" alt="keri" />

                <span className="menu-tag bg-warning">Dinner</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Premium Steak</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>45
                </span>

                <del className="ms-4">
                  <small>$</small>150
                </del>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={far} className="img-fluid menu-image" alt="far" />

                <span className="menu-tag bg-warning">Dinner</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Seafood Set</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>86
                </span>

                <del className="ms-4">
                  <small>$</small>124
                </del>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={lou} className="img-fluid menu-image" alt="lou" />

                <span className="menu-tag bg-warning">Breakfast</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Burger Set</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>20.50
                </span>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img src={far2} className="img-fluid menu-image" alt="far2" />

                <span className="menu-tag bg-warning">Lunch</span>
              </div>

              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Healthy Soup</h4>

                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>34.20
                </span>

                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>

                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star-fill reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                    <i className="bi-star reviews-icon"></i>
                  </div>

                  <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
