import Slide from "./slide";

function Carousel(props) {
  return (
    <div>
      <div
        id={props.carouselID}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <Slide
            status="active"
            src1="\images\ziedi\ziedi1.jpg"
            src2="\images\ziedi\ziedi2.jpg"
            src3="\images\ziedi\ziedi3.jpg"
            src4="\images\ziedi\ziedi4.jpg"
          />

          <Slide
            src1="\images\ziedi\ziedi5.jpg"
            src2="\images\ziedi\ziedi6.jpg"
            src3="\images\ziedi\ziedi7.jpg"
            src4="\images\ziedi\ziedi8.jpg"
          />

          <Slide
            src1="\images\ziedi\ziedi9.jpg"
            src2="\images\ziedi\ziedi10.jpg"
            src3="\images\ziedi\ziedi11.jpg"
            src4="\images\ziedi\ziedi0.jpg"
          />
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + props.carouselID}
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
          data-bs-target={"#" + props.carouselID}
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
  );
}

export default Carousel;
