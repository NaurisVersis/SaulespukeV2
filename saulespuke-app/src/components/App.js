import Contacts from "./contacts";
import Footer from "./Footer";
import Intro from "./intro";
import Section from "./section";




function App() {
  return (
    <div>
     <Intro />

    <Section
    type="ziedi"
    title= "Ziedi"
    content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta." />

    <Section
    type="davanas"
    title= "Dāvanas"
    content="Quisque ut vestibulum ligula. Etiam blandit, purus ut lacinia interdum, dui lectus dictum sem, eu ullamcorper lacus nibh ut leo. Maecenas dapibus consectetur augue eget dignissim. Suspendisse ultricies consectetur justo sit amet aliquet.
          Curabitur viverra laoreet magna, in congue mauris elementum in. Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta." />

    <Section
    type="netikaiZiedi"
    title= "Ne tikai ziedu kompozīcijas"
    content="Etiam porta dictum aliquam. Aliquam posuere ex quis lacus sagittis fermentum. Vestibulum faucibus a justo eu porta." />
    <Section
    type="kazas"
    title="Līgavu pušķi un kāzu noformējumi"
    content="kaut kas par kāzu noformējumiem" />
    <Contacts/>
    <Footer/>
    
    </div>
  )
}

export default App;
