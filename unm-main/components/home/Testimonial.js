import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="bg-[#E3F3FF] py-20">
      <div className="container">
        <div className=" text-center">
          <h2 className="h2 m-0">Customer Testimonials</h2>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active rounded w-10 h-10"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner py-20">
            <div className="carousel-item active">
              <TestimonialItem />
            </div>
            <div className="carousel-item">
              <TestimonialItem />
            </div>
            <div className="carousel-item">
              <TestimonialItem />
            </div>
          </div>
          <button
            className="carousel-control-prev text-blue-600"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
