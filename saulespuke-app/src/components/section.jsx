import Carousel from "./carousel";

function Section (props){


    return (
<div class={props.type}>
<h2>{props.title}</h2>
   <Carousel
       carouselID={"carousel"+props.type}
   />
   <div class="container apraksts">
            <p>{props.content}</p>
          </div>
</div>
    )
};

export default Section;