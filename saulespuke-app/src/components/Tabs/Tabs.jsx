import { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="section">
      <ul className="tabs even-colums">
        {children.map((tab) => (
          <li key={tab.props.title} className="">
            <a href="/" onClick={(e) => handleClick(e, tab.props.title)}>
              {tab.props.title}
            </a>
          </li>
        ))}
      </ul>
      {children.map((one) => {
        if (one.props.title === activeTab)
          return (
            <div key={one.props.title} className="tabsContent">
              {one}
            </div>
          );
      })}
    </div>
  );
}

export default Tabs;
