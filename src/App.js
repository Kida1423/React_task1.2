import Header  from "./components/header/Header";
import Promo from "./components/Promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/Banner/Banner"
import Youngs from "./components/youngs_card/Youngs_card";
import Community from "./components/Community/Community"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Banner/>
      <Youngs/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
