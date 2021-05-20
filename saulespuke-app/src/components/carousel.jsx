import Slide from "./slide";



function Carousel (props) {

  
  
    return (
        <div>
            <div id={props.carouselID} class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
                <Slide 
                status="active"
                //Vot šeit vajadzētu lai mainās tie bilžu nosaukumi.. lai tas "ziedi0" būtu {props.type+randomNr}
                //un tas arī mainās atkarībā kāda type Section ir.. 
                  src1={{"\images\"+ props.imageType + "\"+ props.imageType + "1.jpg"}}
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

            <button class="carousel-control-prev" type="button" data-bs-target={ "#"+ props.carouselID} data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={"#"+props.carouselID} data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
    )
};

export default Carousel;