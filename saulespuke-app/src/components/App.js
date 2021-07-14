import Contacts from "./contacts";
import Footer from "./Footer";
import Intro from "./intro";
import Section from "./section";
import Tabs from "./Tabs/index";

function App() {
  return (
    <div>
      <Intro />
      <Tabs>
        <Section
          type="kazas"
          title="Līgavu pušķi un kāzu noformējumi"
          content="kaut kas par kāzu noformējumiem"
        />
        <Section
          type="netikaiZiedi"
          title="Ne tikai ziedu kompozīcijas"
          content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
        />
        <Section
          type="davanas"
          title="Dāvanas"
          content="Quisque ut vestibulum ligula. Etiam blandit, purus ut lacinia interdum, dui lectus dictum sem, eu ullamcorper lacus nibh ut leo. Maecenas dapibus consectetur augue eget dignissim. Suspendisse ultricies consectetur justo sit amet aliquet.
                Curabitur viverra laoreet magna, in congue mauris elementum in. Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
        />
        <Section
          type="ziedi"
          title="Ziedi"
          content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta."
        />
        <Section
          type="jaunums"
          title="Kaut kas jauns"
          content="jānotestē vai izdodas ielikt vajadzīgo"
        />
         <Section
          type="ziedi"
          title="Kaut kas jaunāks"
          content="Nulla lacinia lectus eget erat placerat dictum. Aenean nec hendrerit risus. Pellentesque vel ante ut ligula pharetra tincidunt nec non purus. Maecenas sit amet posuere diam. Nunc mauris neque, pellentesque sit amet quam sit amet, volutpat hendrerit nisl. Ut tincidunt ligula consequat, molestie felis sed, finibus elit. Donec condimentum sollicitudin nisl, ac euismod dolor convallis eu. Duis justo lacus, cursus non euismod ut, pellentesque sit amet urna. Nullam non volutpat purus, sed pellentesque sem. Donec et malesuada augue."
        />
      </Tabs>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
