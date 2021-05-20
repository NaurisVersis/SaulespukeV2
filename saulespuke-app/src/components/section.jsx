import Carousel from "./carousel";

function Section (props){


    return (
<div className={props.type}>
<h2>{props.title}</h2>
   <Carousel
       carouselID={"carousel"+props.type}
       imageType={props.type}
   />
   <div class="container apraksts">
            <p>{props.content}</p>
          </div>
</div>
    )
};

export default Section;