



function Slide (props) {




    return (
        <div className={"carousel-item " + ( props.status || "") }>
            <div class="container karuselis">
              <img src={props.src1} class="d-block w-25" alt="..."/>
              <img src={props.src2} class="d-block w-25" alt="..."/>
              <img src={props.src3} class="d-block w-25" alt="..."/>
              <img src={props.src4} class="d-block w-25" alt="..."/>

            </div>
              </div>
    )
};

export default Slide;