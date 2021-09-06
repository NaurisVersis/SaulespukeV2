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
          type="ziedi"
          title="Grieztie ziedi "
          content="„Protams, bez ziediem es varētu iztikt, bet tie man palīdz saglabāt cieņu pašam pret sevi, jo tie apliecina, ka es pilnībā neesmu ikdienas rūpju sasaistīts. Tie ir manas brīvības apliecinājums” 

/ R. Tagore/ "
        />
        <Section
          type="netikaiZiedi"
          title="Ziedu pušķi un kompozīcijas "
          content="Ziedu kompozīcijas iespējams izveidot gan grozos, gan kastēs, tās ilgāk saglabā svaigumu, jo ziedi tiek ievietoti oāzēs. Ziedu pušķi vai kompozīcijas jāpasūta vismaz 3 dienas iepriekš. "
        />
        <Section
        type="netikaiZiedi"
        title="Saldie un sāļie pušķi un kompozīcijas"
        content="Pušķi, kas nevīst, roku darbs, katrs ziediņš un lapiņa veidoti ar mīlestību un labām domām. Visdažādākie risinājumi oriģināliem apsveikumiem." />
        <Section
          type="kazas"
          title="Kāzu floristika"
          content="Kāzas nav iedomājamas bez ziediem. Palīdzēsim piepildīt Jūsu vēlmes un ieceres, radot un veidojot līgavas pušķi, līgavaiņa piespraudi, ziedu pušķus vecākiem, rotas vedējiem, automašīnas dekoru. Kā arī noformēsim laulību ceremonijas vietu, foto stūrīti vai sienu, izdekorēsim telpas. Ar prieku uzbursim Jūsu sapni!" />
        <Section
          type="davanas"
          title="Dāvanas"
          content="Mūsu veikaliņa piedāvājumā ir dažādi Latvijas uzņēmēju ražojumi: Dabas pērles kosmētika; Baltic candles; Dobeles sveces. Vienmēr meklējam, ko jaunu piedāvāt Jūsu vērtējumam. "
        />
        <Section
          type="baloni"
          title="Baloni un balonu pušķi"
          content="Kā balons, kas gaisā uzmests vējā,
Nu brīvi slīd vēl šeit, drīz tur, 
Te zemu slīd, te augšā aizrauts spēji, 
Tas nav nevienam, vien vējš to augšā tur... "
        />
        <Section
          type="seras"
          title="Sēru floristika"
          content="Ziedi kā pēdējais mīlestības, cieņas un goda apliecinājums. Gan tradicionāli, gan personalizēti  pušķi, štrausi, vainagi, zārku dekori, krustu vainadziņi, sēru lentas. Iespējams kompozīcijas vai vainagus sagatavot oāzēs. Tas ir ļoti ērti, ja uz pēdējām atvadām jābrauc tālāks ceļš. "/>
      </Tabs>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
