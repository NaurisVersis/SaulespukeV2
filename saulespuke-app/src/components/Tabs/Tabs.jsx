

function Tabs({children}) {
  return (
    <div className="ziedi">
      <ul className="tabs container nav nav-tabs ">
      {children.map((tab) => (
        <li key={tab.props.title} className="">{tab.props.title}</li>
      ))}
        

      </ul>
      {children.map((one) =>
        (<div key={one.props.title} className="tabsContent">{one}</div>) )}
      
    </div>
  );
}

export default Tabs;
