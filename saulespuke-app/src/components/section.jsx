import Carousel from "./carousel";

function Section (props){


    return (
<div class="ziedi">
<h2>{props.title}</h2>
   <Carousel/>
   <div class="container apraksts">
            <p>{props.content}</p>
          </div>
</div>
    )
};

export default Section;