import Section from "../section";

function Tabs() {
  return (
    <div>
      <ul className="tabs">
        <li>
          <Section
            type="ziedi"
            title="Ziedi"
            content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
          />
        </li>
        <li>
          <Section
            type="davanas"
            title="Dāvanas"
            content="Quisque ut vestibulum ligula. Etiam blandit, purus ut lacinia interdum, dui lectus dictum sem, eu ullamcorper lacus nibh ut leo. Maecenas dapibus consectetur augue eget dignissim. Suspendisse ultricies consectetur justo sit amet aliquet.
          Curabitur viverra laoreet magna, in congue mauris elementum in. Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
          />
        </li>
        <li>
          <Section
            type="netikaiZiedi"
            title="Ne tikai ziedu kompozīcijas"
            content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
          />
        </li>
        <li>
          <Section
            type="kazas"
            title="Līgavu pušķi un kāzu noformējumi"
            content="kaut kas par kāzu noformējumiem"
          />
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
