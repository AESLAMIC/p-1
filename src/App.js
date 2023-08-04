import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ShortDesc from "./components/ShortDesc";
import Shdesc2 from "./components/Shdesc2";
import Whyreact from "./components/Whyreact";
import Guid from "./components/Guid";
import AppsLists from "./components/AppsLists";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShortDesc />
      <Shdesc2 />
      <Whyreact />
      <Guid />
      <AppsLists />
      <Footer />
    </div>
  );
}

export default App;
