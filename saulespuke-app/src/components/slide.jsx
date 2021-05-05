// import ziedi1 from "../ziedi/ziedi1.jpg";



function Slide (props) {

  const numbers = [0, 1,2,3,4,5,6,7,8,9,10,11];
  console.log(numbers);
  let skaitlis = 3;

    return (
        <div class="carousel-item active props.status">
            <div class="container karuselis">
              <img src="\images\ziedi\ziedi1.jpg" class="d-block w-25" alt="..."></img>
              <img src="\images\ziedi\ziedi2.jpg" class="d-block w-25" alt="..."></img>
              <img src="\images\ziedi\ziedi3.jpg" class="d-block w-25" alt="..."></img>
              <img src="\images\ziedi\ziedi4.jpg" class="d-block w-25" alt="..."></img>

            </div>
              </div>
    )
};

export default Slide;