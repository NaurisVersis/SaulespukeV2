function Slide(props) {
  return (
    <div className={"carousel-item " + (props.status || "")}>
      <div className="container karuselis">
        <img src={props.src1} className="d-block w-25" alt="..." />
        <img src={props.src2} className="d-block w-25" alt="..." />
        <img src={props.src3} className="d-block w-25" alt="..." />
        <img src={props.src4} className="d-block w-25" alt="..." />
      </div>
    </div>
  );
}

export default Slide;
