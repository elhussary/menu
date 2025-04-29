import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Menu from "./routes/menu/menu";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <footer className="bg-success text-center py-3">
        <div className="container">
          <div className="row">
            {/* Phone Numbers Section */}
            <div className="col-md-6">
              <div>
                <p className="m-0">
                  <a
                    href="https://wa.me/971547094237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light"
                  >
                    <i className="fa-brands fa-whatsapp mx-2"></i> +971 54 709
                    4237
                  </a>
                </p>
              </div>
              <div>
                <p className="m-0">
                  <a
                    href="https://wa.me/971547094238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light"
                  >
                    <i className="fa-brands fa-whatsapp mx-2"></i> +971 54 709
                    4238
                  </a>
                </p>
              </div>
              <div>
                <p className="m-0">
                  <a
                    href="https://wa.me/97143406722"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light"
                  >
                    <i className="fa-brands fa-whatsapp mx-2"></i> +971 4 3 40
                    67 22
                  </a>
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="col-md-6">
              <p className="m-0 text-light">
                <i className="fa fa-map-marker-alt"></i> Nad Al Hamar Avenue -
                Dubai <br /> United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971547094238"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
