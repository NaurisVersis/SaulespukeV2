import Slide from "./slide";



function Carousel () {

  
  
    return (
        <div>
            <div id="carouselZiedi" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
                <Slide />

            <div class="carousel-item">
              <div class="container karuselis">
                <img src="\images\ziedi\ziedi5.jpg" class="d-block w-25" alt="..."></img>
                <img src="\images\ziedi\ziedi6.jpg" class="d-block w-25" alt="..."></img>
                <img src="\images\ziedi\ziedi7.jpg" class="d-block w-25" alt="..."></img>
                <img src="\images\ziedi\ziedi8.jpg" class="d-block w-25" alt="..."></img>

              </div>
                  </div>

              <div class="carousel-item">
                <div class="container karuselis">
                  <img src="\images\ziedi\ziedi9.jpg" class="d-block w-25" alt="..."></img>
                  <img src="\images\ziedi\ziedi10.jpg" class="d-block w-25" alt="..."></img>
                  <img src="\images\ziedi\ziedi11.jpg" class="d-block w-25" alt="..."></img>
                  <img src="\images\ziedi\ziedi0.jpg" class="d-block w-25" alt="..."></img>

                </div>
                    </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselZiedi" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselZiedi" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
    )
};

export default Carousel;