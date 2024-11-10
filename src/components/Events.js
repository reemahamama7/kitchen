import pablo from "../images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg";
import stefan from "../images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg";
import gill from "../images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import caro from "../images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg";
import louis from "../images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";
const Events = () => {
  return (
    <section className="news section-padding">
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <a href="news-detail.html">
                <img src={pablo} className="img-fluid news-image" alt="pablo" />
              </a>

              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>

                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Healthy Lifestyle and happy living tips
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <a href="news-detail.html">
                <img src={stefan} className="img-fluid news-image" alt="stefan" />
              </a>

              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>

                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    How to make a healthy meal
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
              <a href="news-detail.html">
                <img src={gill} className="img-fluid news-image" alt="gill" />
              </a>

              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Promotions</span>

                <strong>8 April 2022</strong>

                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Is Coconut good for you?
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
              <a href="news-detail.html">
                <img src={caro} className="img-fluid news-image" alt="caro" />
              </a>

              <div className="news-text-info">
                <span className="category-tag">News</span>

                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Salmon Steak Noodle
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <a href="news-detail.html">
                <img src={louis} className="img-fluid news-image" alt="louis" />
              </a>

              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Meeting</span>

                <strong>30 April 2022</strong>

                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Making a healthy salad
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
