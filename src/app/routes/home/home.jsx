import "./home.css";

import { Link } from "react-router-dom";
import { ImageGallery } from "../../../components/ImageGallery";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow position-relative">
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <div className="mb-5 w-100 custom-image-container">
                <img
                  src={"./assets/images/menu-logo.png"}
                  alt=""
                  className="custom-image"
                />
              </div>
              <div className="d-flex justify-content-cneter align-items-center">
                <div className="text-center my-3">
                  <Link to="/menu" onClick={() => toggleLanguage("ar")}>
                    <button className="btn btn-success btn-md mx-2">
                      Arabic Menu
                      <i class="fa-solid fa-utensils ms-2"></i>
                    </button>
                  </Link>

                  <Link to="/menu" onClick={() => toggleLanguage("en")}>
                    <button className="btn btn-outline-success btn-md mx-2">
                      English Menu
                      <i class="fa-solid fa-utensils ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Remaining content */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <div className="image-container w-100 text-center">
              <img
                src={"./assets/images/about-img.jpg"}
                className="img-fluid rounded w-100  "
                alt="about img"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center  ms-md-auto">
            <h2 className="fs-1 mb-2 text-uppercase  fw-bold">About Us</h2>
            <p>
              Our grilled dishes are a highlight of Iraqi cuisine, featuring
              juicy kebabs, tender chicken, and savory lamb, all perfectly
              seasoned and cooked over an open flame. Each bite captures the
              smoky flavors and rich spices that are integral to traditional
              Iraqi grilling, often served with sides like rice, fresh salads,
              and tangy sauces.
            </p>
          </div>
        </div>
      </div>

      <ImageGallery />
    </div>
  );
}

export default Home;
