export function ImageGallery() {
  return (
    <div className="container py-2">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Image Gallery
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery6.jpeg"
              className="img-fluid"
            />
          </div>
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery1.jpeg"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery7.jpeg"
              className="img-fluid"
            />
          </div>
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery4.jpeg"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery5.jpeg"
              className="img-fluid"
            />
          </div>
          <div className="my-3">
            <img
              src="./assets/images/gallery/gallery2.jpeg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
